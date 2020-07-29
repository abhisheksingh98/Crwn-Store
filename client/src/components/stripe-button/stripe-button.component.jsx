import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_nEhExSrYcaKrtfBsDEQu4AmI00zOUBLa6R";

  const onToken = async token => {
    try {
      const response = await axios({
        method: "POST",
        url: "payment",
        data: {
          token,
          amount: priceForStripe
        }
      });
      alert(response.data.success.outcome.seller_message);
    } catch (error) {
      console.log("Payment error: ", error.response.data);
      alert(error.response.data.error.message);
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
