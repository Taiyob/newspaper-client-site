import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../api/url";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useAuth();

  const { data = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res?.data;
    },
  });
  return (
    <div className="mt-20 text-2xl text-red-800">
      <Helmet>
        <title>Payment History</title>
      </Helmet>
      <h2>{data?.length}</h2>
    </div>
  );
};

export default PaymentHistory;
