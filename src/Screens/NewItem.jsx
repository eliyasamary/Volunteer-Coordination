import "../style/styles.css";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createItem } from "../HTTP/http";

const NewItem = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    text: "",
    author: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [successMessage]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createItem(data)
      .then(() => {
        setSuccessMessage("Donation created successfully !");
        setData({
          donorName: "",
          amount: "",
          location: "",
        });
        setError("");
      })
      .catch((err) => {
        console.error("Error creating donation:", err);
        setSuccessMessage("");
        setError("Failed to create donation. Please try again.");
      });
  };

  return (
    // <Box className="content-box">
    //   <h1 className="title">New Article</h1>
    //   <Box className="items-container">new item</Box>
    // </Box>

    <Box className="content-box">
      <h1 className="title">Create New Donation</h1>
      <form onSubmit={handleSubmit} className="flex-container-col">
        <TextField
          className="input-field"
          label="Title"
          name="title"
          value={data.title}
          onChange={handleInputChange}
        />
        <TextField
          className="input-field"
          label="Description"
          name="description"
          value={data.description}
          onChange={handleInputChange}
        />
        <TextField
          className="input-field"
          label="text"
          name="text"
          value={data.text}
          onChange={handleInputChange}
        />
        <TextField
          className="input-field"
          label="author"
          name="author"
          value={data.author}
          onChange={handleInputChange}
        />
        <div className="btn-wrapper">
          <Button type="submit" variant="contained" className="nav-btn">
            Save
          </Button>
        </div>
      </form>
      {successMessage && (
        <div>
          <p className="successMessage">{successMessage}</p>
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </Box>
  );
};

export default NewItem;
