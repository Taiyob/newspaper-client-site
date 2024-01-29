import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../api/uri";

const useArticle = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const publisherInfo = await axiosPublic.get("/show-article");
      return publisherInfo;
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useArticle;
