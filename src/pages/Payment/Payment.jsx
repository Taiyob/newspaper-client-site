import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";

// add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const { price } = useParams();
  return (
    <div className="mt-20">
      <Helmet>
        <title>Payment</title>
      </Helmet>
      {price}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-10 shadow-lg">
        <Elements stripe={stripePromise}>
          <CheckoutForm price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
