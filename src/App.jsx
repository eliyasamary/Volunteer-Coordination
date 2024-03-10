import { Outlet } from "react-router-dom";
import "./App.css";
import Box from "@mui/material/Box";
import Header from "./Components/Header.jsx";
import Navigation from "./Components/Navigation.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <Box className="root">
      <Box className="container-primary">
        <Header></Header>
        <Navigation></Navigation>
      </Box>
      <Outlet />
      <Footer></Footer>
    </Box>
  );
};

export default App;
