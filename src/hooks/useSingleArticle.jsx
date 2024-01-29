import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../api/uri";

const useSingleArticle = (id) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["singleArticles", id],
    queryFn: async () => {
      try {
        const publisherInfo = await axiosPublic.get(`/show-article/${id}`);
        console.log(publisherInfo); 
        return publisherInfo;
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useSingleArticle;
