import axios from "axios";
import { localAuthTag } from "../hooks";

const storaged = localStorage.getItem(localAuthTag);

const userData = JSON.parse(storaged || "{}");

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${userData?.token}` || "",
  },
});

export * from "./auth";
export * from "./payments";
export * from "./categories";
export * from "./payments-groups";
export * from "./users";
