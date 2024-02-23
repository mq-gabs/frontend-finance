import toast from "react-hot-toast";

export const call = async (func: Function) => {
  try {
    const { data } = await func();

    return data;
  } catch ({ response }: any) {
    toast.error(response?.data?.message || "Ocorreu um errro.");
    console.log({ response });
    return;
  }
};
