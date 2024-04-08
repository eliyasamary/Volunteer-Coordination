import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { Link } from "react-router-dom";
import "../style/styles.css";

const Login = () => {
  return (
    <Box className="root">
      <Box className="container-primary">
        <Header></Header>
        <Box className="content-box">
          <form className="flex-container-col">
            <h1 className="title">Login</h1>
            <TextField
              className="input-field"
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              className="input-field"
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <div className="btn-wrapper">
              <Button type="submit" variant="contained" className="nav-btn">
                Sign-in
              </Button>
            </div>
          </form>
          {/* <Link to="/signup">Sign-Up</Link> */}
        </Box>
        <Footer></Footer>
      </Box>
    </Box>
  );
};

export default Login;
