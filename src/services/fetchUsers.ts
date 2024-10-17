import { ApiError } from "@/types/errors";
import { User } from "@/types/User";
import axios, { AxiosError } from "axios";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const request = await axios.get<User[]>(
      "https://fake-json-api.mock.beeceptor.com/users"
    );
    return request.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      throw new Error(
        axiosError.response?.data?.message ||
          "An error occurred while fetching posts"
      );
    }

    throw new Error("An unexpected error occurred");
  }
};
