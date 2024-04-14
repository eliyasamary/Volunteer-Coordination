// SIGN-UP

import "../style/styles.css";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getAllLocations, signupUser, getAllSkills } from "../HTTP/http";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormLabel from "@mui/material/FormLabel";
import CircularProgress from "@mui/material/CircularProgress";
// import Modal from "@mui/material/Modal";
// import Typography from "@mui/material/Typography";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const NewItem = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    location: "",
    skills: [],
  });
  const [loading, setLoading] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const [locationsData, setLocationsData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        const response = await getAllLocations();
        setLocationsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching locations:", error);
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const response = await getAllSkills();
        // console.log("Siklls data:", response.data);
        setSkillsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching skills:", error);
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const handleLocationChange = (event) => {
    // setLocation(event.target.value);

    const newLocation = event.target.value;
    console.log("New Location:", newLocation);

    setLocation(newLocation);
    setData({ ...data, ["location"]: newLocation });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      console.log("Adding Skill:", name);
      setSkills((prevSkills) => [...prevSkills, name]);
      setData({ ...data, ["skills"]: skills });
    } else {
      console.log("Removing Skill:", name);
      setSkills((prevSkills) => prevSkills.filter((skill) => skill !== name));
      setData({ ...data, ["skills"]: skills });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("Input Change:", name, value);

    setData({
      ...data,
      [name]: value,
      ["location"]: location,
      ["skills"]: skills,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Data1:", data);
    console.log("loction - :", location);
    console.log("skills - :", skills);
    try {

      await signupUser(data);
      setData({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        location: "",
        skills: [],
      });
    } catch (err) {
      // setError("");
      // displayMessage();
      // moveToSignIn();
      console.error("Error creating user:", err);
      // setError("Failed to sign up. Please try again.");
    }
  };

  const moveToSignIn = () => {
    /* eslint-disable react/prop-types */
    props.setSignUp(false);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

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
            <h1 className="title">Sign-up</h1>
            <form
              onSubmit={handleSubmit}
              className="flex-container-col signup-form"
            >
              <TextField
                className="input-field"
                label="Name"
                name="name"
                value={data.name}
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
                type="password"
                value={data.password}
                onChange={handleInputChange}
              />
              <TextField
                className="input-field"
                label="Password Confirm"
                name="passwordConfirm"
                type="password"
                value={data.passwordConfirm}
                onChange={handleInputChange}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={location}
                  label="location"
                  className="input-field"
                  onChange={handleLocationChange}
                >
                  {locationsData?.map((item) => (
                    <MenuItem key={item._id} value={item.location}>
                      {item.location}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormGroup className="checkbox-container">
                <FormLabel component="legend">Skills</FormLabel>
                {skillsData?.map((item) => (
                  <FormControlLabel
                    className="checkbox-input"
                    key={item._id}
                    value={item.name}
                    control={
                      <Checkbox
                        checked={skills.includes(item.name)}
                        onChange={handleCheckboxChange}
                        name={item.name}
                      />
                    }
                    label={item.name}
                  />
                ))}
              </FormGroup>
              <div className="btn-wrapper">
                <Button type="submit" variant="contained" className="nav-btn">
                  Submit
                </Button>
              </div>
            </form>
            <a className="font-primary sign-in-up-btn" onClick={moveToSignIn}>
              Sign-In
            </a>
          </Box>
        </Box>
        {/* {isModalOpen && (
          <Modal
            open={open}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Registration successfully completed!
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Please login to continue
              </Typography>
            </Box>
          </Modal>
        )} */}
      </Box>
    );
};

export default NewItem;
