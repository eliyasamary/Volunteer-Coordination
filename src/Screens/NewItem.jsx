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
    <Box className="content-box">
      <h1 className="title">Sign-up</h1>
      <form onSubmit={handleSubmit} className="flex-container-col">
        <TextField
          className="input-field"
          label="Name"
          name="name"
          value={data.name}
          onChange={handleInputChange}
        />
        <TextField
          className="input-field"
          label="Location"
          name="location"
          value={data.location}
          onChange={handleInputChange}
        />
        <TextField
          className="input-field"
          label="Email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
        <TextField
          className="input-field"
          label="Password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
        {/* skills */}
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
