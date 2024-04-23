import "../style/styles.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getTask, updateUser, getUser, updateTask } from "../HTTP/http";
import CircularProgress from "@mui/material/CircularProgress";

const ItemPage = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  const [user, setUser] = useState(null);
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
      if (!user || !user.tasks || user.tasks.includes(itemId)) {
        alert("You have already signed up for this volunteering task!");
        return;
      }

      const updatedUser = { ...user, tasks: [...user.tasks, itemId] };
      const response = await updateUser(userId, updatedUser);

      const updateedTask = {
        ...item,
        volunteers: [...item.volunteers, userId],
      };
      const response2 = await updateTask(itemId, updateedTask);

      console.log("User updated: ", response.data);
      console.log("Task updated: ", response2.data);

      alert("Successfully signed up for the volunteering task!");
      window.location.href = "/";
    } catch (error) {
      console.error("Error updating user tasks:", error);
      alert("Failed to sign up for the volunteering task. Please try again.");
    }
  };

  const handleFinishTask = async () => {
    try {
      if (!user || !user.tasks || !user.tasks.includes(itemId)) {
        alert("You are not signed for this volunteering task!");
        return;
      }

      const updatedUser = {
        ...user,
        tasks: user.tasks.filter((task) => task !== itemId),
        completedTasks: [...user.completedTasks, itemId],
      };

      const response = await updateUser(userId, updatedUser);

      console.log("User updated:", response.data);
      alert("Successfully finished the volunteering task!");
      window.location.href = "/";
    } catch (error) {
      console.error("Error updating user tasks:", error);
      alert("Failed to finish the volunteering task. Please try again.");
    }
  };

  if (loading || !item || !user) {
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
      {user.tasks && user.tasks.includes(itemId) ? (
        <>
          <Button
            type="button"
            variant="contained"
            className="btn-primary font-primary btn"
            onClick={handleFinishTask}
          >
            I finished the task
          </Button>
          <Button
            type="button"
            variant="contained"
            className="btn-secondary font-primary btn"
            component={Link}
            to="/dashboard"
          >
            Go Back
          </Button>
        </>
      ) : (
        <>
          <Button
            type="button"
            variant="contained"
            className="btn-primary font-primary btn"
            onClick={handleSignup}
          >
            I want to sign up for this volunteering task
          </Button>
          <Button
            type="button"
            variant="contained"
            className="btn-secondary font-primary btn"
            component={Link}
            to="/allItems"
          >
            Go Back
          </Button>
        </>
      )}
    </Box>
  );
};

export default ItemPage;
