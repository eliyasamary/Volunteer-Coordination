import Box from "@mui/material/Box";
import "../style/styles.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Box className="header-component center-flex">
      <div className="container-flex">
        <h1 className="header-title">Volunteer Coordination</h1>
        <img src={logo} alt="Logo" width={"60%"} />
      </div>
    </Box>
  );
};

export default Header;
