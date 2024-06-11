import toast from "react-hot-toast";
import { localAuthTag } from "../hooks";
import { AxiosResponse } from "axios";

export const call = async (func: () => Promise<AxiosResponse>) => {
  try {
    const { data } = await func();

    if (data?.message) {
      toast.success(data.message);
    }

    return data;
  } catch ({ response }: any) {
    toast.dismiss();

    toast.error(response?.data?.message || "Ocorreu um errro.");

    console.error({ response });

    if (response?.status === 403) {
      localStorage.setItem(localAuthTag, "{}");
      window.location.pathname = "/";
    }

    return;
  }
};
