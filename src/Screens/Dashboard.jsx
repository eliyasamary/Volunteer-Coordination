import "../style/styles.css";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { getAllTasks } from "../HTTP/http";

const Dashboard = () => {
  const [myTasks, setMyTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const response = await getAllTasks();
        setMyTasks(response.data);
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
      <h1 className="title">Dashboard</h1>
      <div id="flex-cards">
        <div className="card">
          <h2 className="detail-text">My Tasks</h2>
          <div className="card-items">
            {myTasks.map((item) => (
              // <Link
              //   to={`/ItemPage/${item._id}`}
              //   key={item._id}
              //   className="link-decoration"
              // >
              <p key={item._id} className="font-primary pink-container">
                {item.title}
              </p>
              // </Link>
            ))}
          </div>
        </div>
        <div className="card">
          <h2 className="detail-text">Tasks I Performed</h2>
          <div className="card-items">
            <p className="font-primary green-container">hghghg</p>
          </div>
        </div>
        <div className="card">
          <h2 className="detail-text">Suggested Tasks</h2>
          <div className="card-items">
            <p className="font-primary orange-container">hghghg</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Dashboard;
