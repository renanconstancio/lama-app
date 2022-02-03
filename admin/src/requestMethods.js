import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "http://api.lama.test/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjk4M2UyNTc4YTcyZTQzMjRlZDczYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mzc0MjQ4NCwiZXhwIjoxNjQ0MDAxNjg0fQ.7SW6tyNpz8VwZHSh3Pqj-2jtFsmDweDPwfsFF5kAkCU"; // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
