import { api } from "..";
import { call } from "../utils";

export const deleteNote = async ({ id }: { id: string }) => {
  const response = await call(async () => api.delete(`/notes/${id}`));

  return response;
};
