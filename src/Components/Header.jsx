import Box from "@mui/material/Box";
import { useState } from "react";
import "../style/styles.css";
import logo from "../assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import CircularProgress from "@mui/material/CircularProgress";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const logout = () => {
    setLoading(true);
    console.log("Logging out");
    localStorage.removeItem("token");
    window.location.reload(() => {
      setLoading(false);
    });
  };
  if (loading) {
    return (
      <Box className="loading">
        <CircularProgress color="inherit" />
      </Box>
    );
  } else
    return (
      <Box className="header-component center-flex">
        <div className="container-flex">
          <h1 className="header-title">Volunteer Coordination</h1>
          <img id="logo" src={logo} alt="Logo" width={"60%"} />
        </div>
        {localStorage.getItem("token") && (
          <Box className="container-flex logout">
            <span>Logout</span>
            <LogoutIcon onClick={logout}></LogoutIcon>
          </Box>
        )}
      </Box>
    );
};

export default Header;
