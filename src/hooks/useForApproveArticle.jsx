import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/url";

const useForApproveArticle = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["approve-article"],
    queryFn: async () => {
      const publisherInfo = await axiosSecure.get("/show-article");
      return publisherInfo;
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useForApproveArticle;
