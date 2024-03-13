import "../style/styles.css";
import Box from "@mui/material/Box";
// import React from "react";
// import { getAllItems } from "../HTTP/http";
import DummyVolunteeringTasks from "../DummyData/DummyVolunteeringTasks.json";
import { Link } from "react-router-dom";
// import ClipLoader from "react-spinners/ClipLoader";

const AllItems = () => {
  // const [items, setItems] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   getAllItems()
  //     .then((data) => {
  //       setItems(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <ClipLoader color="#3a3630" />;
  // }

  return (
    <Box className="content-box">
      <h1 className="title">Volunteer Tasks</h1>
      <Box className="items-container">
        {/* {items.map((item) => ( */}
        {DummyVolunteeringTasks.map((item) => (
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
