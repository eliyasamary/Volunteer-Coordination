import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: "",
    userId: "",
    userName: "",
    isAuthenticated: false,
    // eslint-disable-next-line no-unused-vars
    authenticate: (token) => {},
    logout: () => {},
  });
  /* eslint-disable react/prop-types */


function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();
    const [userId, setUserId] = useState();
    const [userName, setUserName] = useState();
  
    function authenticate(token, id, name) {
      setAuthToken(token);
      setUserId(id);
      setUserName(name);
    }
  
    function logout() {
      setAuthToken(null);
      setUserId(null);
      setUserName(null);
    }
  
    const value = {
      token: authToken,
      userId: userId,
      userName: userName,
      isAuthenticated: !!authToken,
      authenticate: authenticate,
      logout: logout,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }
  
  export default AuthContextProvider;
  