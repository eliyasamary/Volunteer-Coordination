import "../style/styles.css";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { getAllTasks } from "../HTTP/http";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await getAllTasks();
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return (
      <Box className="loading">
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    <Box className="content-box">
      <h1 className="title">Volunteer Tasks</h1>
      <Box className="items-container">
        {items.map((item) => (
          <Link
            to={`/ItemPage/${item._id}`}
            key={item._id}
            className="link-decoration"
          >
            <Box key={item._id} className="item-box center-flex-col ">
              <Box className="item-title font-primary">{item.title}</Box>
              <Box className="item-description">{item.description}</Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default AllItems;
