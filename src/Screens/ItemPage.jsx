import "../style/styles.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getTask } from "../HTTP/http";
import CircularProgress from "@mui/material/CircularProgress";

const ItemPage = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

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

    fetchTask();
  }, [itemId]);

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
      <Button variant="contained" className="btn-primary font-primary">
        I want to sign up for this volunteering task
      </Button>
    </Box>
  );
};

export default ItemPage;
