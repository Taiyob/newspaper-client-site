import axiosSecure from "./url";

export const saveUser = async (user) => {
  const currentUser = {
    email: user?.email,
    role: "guest",
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/user/${user?.email}`, currentUser);
  return data;
};

export const getToken = async (email) => {
  const { data } = axiosSecure.post(`/jwt`, email);
  return data;
};
