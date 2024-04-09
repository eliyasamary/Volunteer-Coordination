import { useContext, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { loginUser } from "../HTTP/http.jsx";
import "../style/styles.css";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthContext } from "../store/auth-context.jsx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Login = (props) => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (error) {
      setIsModalOpen(true);
    }
  }, [error]);

  const authCtx = useContext(AuthContext);

  async function loginHandler(email, password) {
    try {
      setLoading(true);
      // setIsAuthenticating(true);
      const response = await loginUser(email, password);
      authCtx.authenticate(
        response.token,
        response.data.user._id,
        response.data.user.name
      );
      window.localStorage.setItem("token", JSON.stringify(response.token));
      window.localStorage.setItem("id", JSON.stringify(response.data.user._id));
      window.localStorage.setItem(
        "name",
        JSON.stringify(response.data.user.name)
      );
      console.log(authCtx.token, authCtx.userId, authCtx.userName);
      window.location.href = "/";
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
      setIsModalOpen(true);
      // setIsAuthenticating(false);
    }
  }

  const moveToSignUp = () => {
    /* eslint-disable react/prop-types */
    props.setSignUp(true);
  };
  if (loading) {
    return (
      <Box className="loading">
        <CircularProgress color="inherit" />
      </Box>
    );
  } else
    return (
      <Box className="root">
        <Box className="container-primary">
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
                  onClick={() => loginHandler(email, password)}
                >
                  Sign-in
                </Button>
              </div>
            </form>
            <a className="font-primary sign-in-up-btn" onClick={moveToSignUp}>
              Sign-Up
            </a>
          </Box>
        </Box>
        {isModalOpen && (
          <Modal
            open={open}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Login error
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Incorrect email or password, please try again
              </Typography>
            </Box>
          </Modal>
        )}
      </Box>
    );
};

export default Login;
