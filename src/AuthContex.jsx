import { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Login from "./Screens/Login";
import NewItem from "./Screens/NewItem";

const AuthContex = () => {
  const [signUp, setSignUp] = useState(false);

  return (
    <Box className="root">
      <Box className="container-primary">
        <Header></Header>
      </Box>
      {signUp ? (
        <NewItem setSignUp={setSignUp} />
      ) : (
        <Login setSignUp={setSignUp} />
      )}
      <Footer></Footer>
    </Box>
  );
};

export default AuthContex;
