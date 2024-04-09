import "../style/styles.css";
import Box from "@mui/material/Box";

const Dashboard = () => {
  return (
    <Box className="content-box">
      <h1 className="title">Dashboard</h1>
      <div id="flex-cards">
        <div className="card">
          <h2 className="detail-text">My Tasks</h2>
          <div className="card-items">
            <p className="font-primary pink-container">Patient Care</p>
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
