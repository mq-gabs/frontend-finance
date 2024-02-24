import toast from "react-hot-toast";
import { localAuthTag } from "../hooks";

export const call = async (func: Function) => {
  try {
    const { data } = await func();

    return data;
  } catch ({ response }: any) {
    toast.dismiss();

    toast.error(response?.data?.message || "Ocorreu um errro.");

    console.log({ response });

    if (response?.status === 403) {
      localStorage.setItem(localAuthTag, "{}");
    }

    return;
  }
};
