import { io } from "socket.io-client";

// eslint-disable-next-line react-refresh/only-export-components
const URL = "http://localhost:5173";

export const socket = io(URL, {
  query: { user_id: window.localStorage.getItem("id") },
});
