import { api } from "..";
import { call } from "../utils";

type TUpdateNote = {
  id: string;
  title?: string;
  body?: string;
};

export const updateNote = async ({ id, title, body }: TUpdateNote) => {
  const response = await call(async () =>
    api.patch(`/notes/${id}`, {
      title,
      body,
    })
  );

  return response;
};
