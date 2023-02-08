import axios from "axios";

const users = axios.create({
  baseURL: "http://localhost:3000",
});

export const getStudents = async () => {
  let res = await users.get("/students");
  return res.data;
};

export const getTeachers = async () => {
  let res = await users.get("/teachers");
  return res.data;
};

export const getSections = async () => {
  let res = await users.get("/sections");
  return res.data;
};

export const getGradeLevels = async () => {
  let res = await users.get("/gradeLevels");
  return res.data;
};

export const getInactiveAccounts = async () => {
  let res = await users.get("/inactiveAccounts");
  return res.data;
};
