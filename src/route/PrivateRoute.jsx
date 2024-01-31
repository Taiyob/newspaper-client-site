import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/animation/simpleLoader.json";

const PrivateRoute = ({ children }) => {
  const { loader, user } = useAuth();
  const location = useLocation();

  if (loader) {
    return (
      <div className="flex justify-center items-center">
        <Lottie
          className="h-[800px]"
          animationData={loadingAnimation}
          loop={true}
        ></Lottie>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" replace="true" state={{ from: location }}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
