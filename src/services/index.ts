import axios from "axios";
import { localAuthTag } from "../hooks";

const storaged = localStorage.getItem(localAuthTag);

const userData = JSON.parse(storaged || "{}");

console.log({ value: import.meta.env });

export const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer ${userData?.token}` || "",
  },
});

export * from "./auth";
export * from "./payments";
export * from "./categories";
export * from "./payments-groups";
