import "../style/styles.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getTask, updateUser, getUser } from "../HTTP/http";
import CircularProgress from "@mui/material/CircularProgress";

const ItemPage = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  const [user, setUser] = useState();
  const userId = JSON.parse(localStorage.getItem("id"));

  useEffect(() => {
    const fetchTask = async () => {
      try {
        setLoading(true);
        const response = await getTask(itemId);
        setItem(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching task " + itemId, error);
        setLoading(false);
      }
    };

    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await getUser(userId);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user " + userId, error);
        setLoading(false);
      }
    };

    fetchTask();
    fetchUser();
  }, [itemId, userId]);

  const handleSignup = async () => {
    try {
      const updatedUser = { ...user, tasks: [...user.tasks, itemId] };
      const response = await updateUser(userId, updatedUser);
      console.log("User updated:", response.data);
      alert("Successfully signed up for the volunteering task!");
    } catch (error) {
      console.error("Error updating user tasks:", error);
      alert("Failed to sign up for the volunteering task. Please try again.");
    }
  };

  if (loading) {
    return (
      <Box className="loading">
        <CircularProgress color="inherit" />
      </Box>
    );
  }
  return (
    <Box className="content-box">
      <h1 className="title">{item.title}</h1>
      <Box className="items-container center-flex-col ">
        <Box className="detail-box ">
          <Box className="flex-container-row">
            <Box className="detail-title">
              <h3>Description</h3>
            </Box>
            <Box className="detail-text">{item.description}</Box>
          </Box>
        </Box>
        <Box className="detail-box ">
          <Box className="flex-container-row">
            <Box className="detail-title">
              <h3>Skills</h3>
            </Box>
            <Box className="detail-text">{item.skills}</Box>
          </Box>
        </Box>
        <Box className="detail-box ">
          <Box className="flex-container-row">
            <Box className="detail-title">
              <h3>Requirements</h3>
            </Box>
            <Box className="detail-text">{item.requirements}</Box>
          </Box>
        </Box>
        <Box className="detail-box ">
          <Box className="flex-container-row">
            <Box className="detail-title">
              <h3>Loction</h3>
            </Box>
            <Box className="detail-text"> {item.location}</Box>
          </Box>
        </Box>
        <Box className="detail-box ">
          <Box className="flex-container-row">
            <Box className="detail-title">
              <h3>Time</h3>
            </Box>
            <Box className="detail-text">{item.time}</Box>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        className="btn-primary font-primary btn"
        onClick={handleSignup}
      >
        I want to sign up for this volunteering task
      </Button>
      <Button
        variant="contained"
        className="btn-secondary font-primary btn"
        href="/allItems"
      >
        Go Back
      </Button>
    </Box>
  );
};

export default ItemPage;
