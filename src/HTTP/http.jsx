import axios from "axios";

const baseURL = "https://volunteer-coordinator.onrender.com";

export const http = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

const loginUser = async (email, password) => {
  console.log({ email: email, password: password });
  try {
    const response = await http.post("/api/v1/users/login", {
      email: email,
      password: password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

const getAllItems = async () => {
  try {
    const response = await http.get("/news");
    return response.data.news;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

const getItem = async (id) => {
  try {
    const response = await http.get("/news/" + id);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

const createItem = async (data) => {
  try {
    const response = await http.post("/news", data);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

const updateItem = async (data) => {
  try {
    console.log(data);
    const response = await http.put("/news/" + data._id, data);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

const deleteItem = async (id) => {
  try {
    const response = await http.delete("/news/" + id);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

export { getAllItems, getItem, createItem, updateItem, deleteItem, loginUser };
