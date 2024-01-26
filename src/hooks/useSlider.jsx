import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api/url";

const useSlider = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["slider"],
    queryFn: async () => {
      const slidersInfo = await axiosSecure.get("/slider-data");
      return slidersInfo;
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useSlider;
