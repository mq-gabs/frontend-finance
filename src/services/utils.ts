export const call = async (func: Function) => {
  try {
    const { data } = await func();

    return data;
  } catch ({ response }: any) {
    console.log({ response });
    return;
  }
};
