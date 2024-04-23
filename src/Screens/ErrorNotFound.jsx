import Box from "@mui/material/Box";
// import "../CSS/style.css";
// import notFoundImg from "../assets/404NotFound.png";

const Error = () => {
  return (
    <Box className="flex-container-col-secondary">
      <h1 className="title-primary">Oops!</h1>
      {/* <img src={notFoundImg} alt="404NotFound" className="not-found-img" /> */}

      <h2 className="text-primary">
        Seems like you have taken a wrong turn ...
      </h2>
      <a href="/allItems" id="error-back-btn" className="body-title">
        Click On Me to find your way back!
      </a>
    </Box>
  );
};

export default Error;
