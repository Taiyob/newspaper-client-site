import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../api/uri";

const usePublisher = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["publishers"],
    queryFn: async () => {
      const publisherInfo = await axiosPublic.get("/show-publisher");
      return publisherInfo;
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default usePublisher;
