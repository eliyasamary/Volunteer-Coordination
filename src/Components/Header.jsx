import Box from "@mui/material/Box";
import "../style/styles.css";
import logo from "../assets/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const logout = () => {
    console.log("Logging out");
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <Box className="header-component center-flex">
      <div className="container-flex">
        <h1 className="header-title">Volunteer Coordination</h1>
        <img src={logo} alt="Logo" width={"60%"} />
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
