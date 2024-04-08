import { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { loginUser } from "../HTTP/http.jsx";
import "../style/styles.css";

import { AuthContext } from "../store/auth-context.jsx";

const Login = (props) => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  // const [isAuthenticating, setIsAuthenticating] = useContext(false);

  const authCtx = useContext(AuthContext);
  async function loginHandler(email, password) {
    try {
      // setIsAuthenticating(true);
      const response = await loginUser(email, password);
      authCtx.authenticate(
        response.token,
        response.data.user._id,
        response.data.user.name
      );
      window.localStorage.setItem("token", JSON.stringify(response.token));
      window.localStorage.setItem("id", JSON.stringify(response.data.user._id));
      window.localStorage.setItem("name", JSON.stringify(response.data.user.name));
      console.log(authCtx.token, authCtx.userId, authCtx.userName);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      //add modal
      // setIsAuthenticating(false);
    }
  }

  const moveToSignUp = () => {
    /* eslint-disable react/prop-types */
    props.setSignUp(true);
  };

  return (
    <Box className="root">
      <Box className="container-primary">
        <Header></Header>
        <Box className="content-box">
          <form className="flex-container-col">
            <h1 className="title">Login</h1>
            <TextField
              onChange={(e) => {
                setMail(e.target.value);
              }}
              className="input-field"
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input-field"
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <div className="btn-wrapper">
              <Button
                variant="contained"
                className="nav-btn"
                onClick={() => 
                  loginHandler(email, password)
                }
              >
                Sign-in
              </Button>
            </div>
          </form>
          {/* <Link to="/signup">Sign-Up</Link> */}
          <Button
            variant="contained"
            className="nav-btn"
            onClick={moveToSignUp}
          ></Button>
        </Box>
        <Footer></Footer>
      </Box>
    </Box>
  );
};

export default Login;
