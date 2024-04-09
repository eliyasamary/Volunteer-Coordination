import "./App.css";
import AuthContextProvider from "./store/auth-context";
import AuthContex from "./AuthContex.jsx";
import Router from "./Router.jsx";

const App = () => {
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
