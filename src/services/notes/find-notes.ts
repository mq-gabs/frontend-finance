import { api } from "..";
import { call } from "../utils";

export const findNotes = async () => {
  const response = await call(async () => api.get("/notes"));

  return response;
};
