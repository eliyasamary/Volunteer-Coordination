import "../style/styles.css";
import Box from "@mui/material/Box";
import { socket } from "../../socket";
import { useEffect, useState } from "react";

const Messages = () => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  function formatDate(date) {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    return `${day}/${month}/${year}: ${hours}:${minutes}`;
  }

  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  function AddMessage(msg, user) {
    // Check if the message is not already in the messages array
    if (!messages.some((m) => m.msg === msg && m.user === user)) {
      setMessages((prevMessages) => [...prevMessages, { msg, user }]);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!messageInput.trim()) return; // Prevent sending empty messages
    socket.emit("chat message", {
      messageInput,
      user: window.localStorage.getItem("name"),
    });
    setMessageInput("");
  };

  // Move onChange handler to the textarea
  const handleChange = (event) => {
    setMessageInput(event.target.value);
  };

  useEffect(() => {
    socket.connect();
    socket.on("chat message", ({ messageInput, user }) => {
      AddMessage(messageInput, user);
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
          <div id="messages-content">
            {messages.map((msg, index) => (
              <div className="message" key={index}>
                <div>{formattedDate}</div>
                <div>
                  {msg.user.replace(/"/g, "") + ":  "}
                  {msg.msg}
                </div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div id="message-box">
            <textarea
              type="text"
              id="message-input"
              placeholder="Type message..."
              onChange={handleChange}
            ></textarea>
            <button type="submit" id="message-submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default Messages;
