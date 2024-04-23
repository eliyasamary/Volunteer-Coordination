import "../style/styles.css";
import Box from "@mui/material/Box";
import { socket } from "../../socket";
import { useEffect } from "react";
const Messages = () => {
  let isPrint = 0;
  function AddMessage(msg) {
    const item = document.createElement("li");
    item.textContent = msg;
    document.getElementById("messages-content").appendChild(item);
    isPrint = 1;
  }
  const handleSubmit = () => {
    const message = document.getElementById("message-input");
    isPrint == 0;
    socket.emit("chat message", message.value);
    message.value = "";
  };
  useEffect(() => {
    socket.connect();
    socket.on("chat message", (msg) => {
      if (isPrint === 0) AddMessage(msg);
    });
    return () => {
      socket.disconnect();
      socket.off("chat message");
    };
  }, []);
  return (
    <Box className="content-box">
      <h1 className="title">Messages</h1>
      <div id="chat">
        <div id="messages">
          <div id="messages-content"></div>
        </div>
        <div id="message-box">
          <textarea
            type="text"
            id="message-input"
            placeholder="Type message..."
          ></textarea>
          <button type="submit" id="message-submit" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </Box>
  );
};

export default Messages;
