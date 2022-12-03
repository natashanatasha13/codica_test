export const callApi = async (url: string) => {
  const res = await fetch(url);
  const parsedRes = await res.json();
  return parsedRes;
};
