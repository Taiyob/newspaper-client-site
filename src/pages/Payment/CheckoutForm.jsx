import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import axiosSecure from "../../api/url";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const { user } = useAuth();
  const totalPrice = price;

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { prices: totalPrice })
      .then((res) => {
        console.log(res?.data?.clientSecret);
        setClientSecret(res?.data?.clientSecret);
      });
  }, [totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // Confirm Payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log(paymentIntent, "payment intent");
      if (paymentIntent?.status === "succeeded") {
        console.log("transection id", paymentIntent?.id);
        setTransectionId(paymentIntent?.id);
        const payment = {
          email: user?.email,
          price: totalPrice,
          date: new Date(), // utc date convert, use moment js to
          title: "beginner",
          features: "1 day",
          status: "pending",
          transactionId: paymentIntent.id,
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log(res);
        if (res?.data?.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Complete",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button
        className="btn btn-sm bg-blue-400 px-4 py-2 rounded-lg my-4"
        type="submit"
        disabled={!stripe || !clientSecret || error}
      >
        Pay
      </button>
      <p className="text-red-800">{error}</p>
      {transectionId && (
        <p className="text-green-800">Your transection ID: {transectionId}</p>
      )}
    </form>
  );
};

CheckoutForm.propTypes = {
  price: PropTypes.string,
};

export default CheckoutForm;
