import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const Login = () => {
  return (
    <>
      <div>
        <h1>Login</h1>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button variant="contained">Submit</Button>
      </div>
    </>
  );
};

export default Login;
