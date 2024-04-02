import { api } from "..";
import { call } from "../utils";

type TCreateNote = {
  title: string;
  body: string;
};

export const createNote = async ({ title, body }: TCreateNote) => {
  const response = await call(async () =>
    api.post("/notes", {
      title,
      body,
    })
  );

  return response;
};
