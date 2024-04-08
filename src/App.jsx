// import { Outlet } from "react-router-dom";
import "./App.css";
// import Box from "@mui/material/Box";
// import Header from "./Components/Header.jsx";
// import Navigation from "./Components/Navigation.jsx";
// import Footer from "./Components/Footer.jsx";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext } from "react";
import AuthContex from "./AuthContex.jsx";
import Router from "./Router.jsx";

const App = () => {
  const authCtx = useContext(AuthContext);

  //window.localStorage.getItem("token");
  return (
    <>
      <AuthContextProvider>
        {!window.localStorage.getItem("token") && <AuthContex />}
        {window.localStorage.getItem("token") && <Router />}
      </AuthContextProvider>
    </>
  );
};

export default App;
