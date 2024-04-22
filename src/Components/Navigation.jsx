import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../style/styles.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box className="nav-component center-flex">
      <Link to="/allItems">
        <Button className="nav-btn">Tasks</Button>
      </Link>
      <Link to="/dashboard">
        <Button className="nav-btn">Dashboard</Button>
      </Link>
      <Link to="/messages">
        <Button className="nav-btn">Messages</Button>
      </Link>
    </Box>
  );
};

export default Navigation;
