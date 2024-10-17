import { ApiError } from "@/types/errors";
import { Post } from "@/types/posts";
import axios, { AxiosError } from "axios";

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const request = await axios.get<Post[]>(
      "https://dummy-json.mock.beeceptor.com/posts"
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
