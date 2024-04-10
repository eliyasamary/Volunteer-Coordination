// SIGN-UP

import "../style/styles.css";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { createItem } from "../HTTP/http";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getAllLocations, signupUser } from "../HTTP/http";

const NewItem = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    skills: [],
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [locationsData, setLocationsData] = useState([]);

  // const [skillsData, setSkillsData] = useState([]);
  // const [locationsData, setLocationsData] = useState([]);
  // const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await getAllLocations();
        setLocationsData(response.data);
        // console.log("Locations:", response.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  // const handleLocationChange = (event) => {
  //   setLocation(event.target.value);
  // };

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
    signupUser(data)
      .then(() => {
        setSuccessMessage("User created successfully !");
        setData({
          name: "",
          email: "",
          password: "",
          location: "",
          skills: [],
        });
        setError("");
      })
      .catch((err) => {
        console.error("Error creating user:", err);
        setSuccessMessage("");
        setError("Failed to sign up. Please try again.");
      });
  };

  const moveToSignIn = () => {
    /* eslint-disable react/prop-types */
    props.setSignUp(false);
  };

  return (
    <Box className="root">
      <Box className="container-primary">
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
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              x
              label="Location"
              className="input-field"
              // onChange={handleLocationChange}
            >
              {locationsData.data.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.location}
                </MenuItem>
              ))}
            </Select>
            <div className="btn-wrapper">
              <Button type="submit" variant="contained" className="nav-btn">
                Submit
              </Button>
            </div>
          </form>
          {successMessage && (
            <div>
              <p className="successMessage">{successMessage}</p>
            </div>
          )}
          {error && <p className="error-message">{error}</p>}
          <a className="font-primary sign-in-up-btn" onClick={moveToSignIn}>
            Sign-In
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default NewItem;
