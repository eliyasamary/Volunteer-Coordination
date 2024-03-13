import "../style/styles.css";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import DummyVolunteeringTasks from "../DummyData/DummyVolunteeringTasks.json";

const ItemPage = () => {
  const { itemId } = useParams();
  const data = DummyVolunteeringTasks.find((item) => item._id === itemId);
  return (
    <Box className="content-box">
      <h1 className="title">{data.title}</h1>
      <Box className="items-container center-flex-col ">
        <Box className="detail-box ">
          <Box className="flex-container-row">
            <Box className="detail-title">
              <h3>Description</h3>
            </Box>
            <Box className="detail-text">{data.description}</Box>
          </Box>
        </Box>
        <Box className="detail-box ">
          <Box className="flex-container-row">
            <Box className="detail-title">
              <h3>Skills</h3>
            </Box>
            <Box className="detail-text">{data.skills}</Box>
          </Box>
        </Box>
        <Box className="detail-box ">
          <Box className="flex-container-row">
            <Box className="detail-title">
              <h3>Requirements</h3>
            </Box>
            <Box className="detail-text">{data.requirements}</Box>
          </Box>
        </Box>
        <Box className="detail-box ">
          <Box className="flex-container-row">
            <Box className="detail-title">
              <h3>Loction</h3>
            </Box>
            <Box className="detail-text"> {data.location}</Box>
          </Box>
        </Box>
        <Box className="detail-box ">
          <Box className="flex-container-row">
            <Box className="detail-title">
              <h3>Time</h3>
            </Box>
            <Box className="detail-text">{data.time}</Box>
          </Box>
        </Box>{" "}
      </Box>
    </Box>
  );
};

export default ItemPage;
