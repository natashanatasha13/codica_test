import { ApiResponse } from "../types/types";
export const callApi = async (url: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(url);
    const parsedRes = await response.json();
    return { success: true, data: parsedRes };
  } catch (error) {
    return {
      success: false,
      data: "Oops, something went wrong.",
    };
  }
};

export default callApi;
