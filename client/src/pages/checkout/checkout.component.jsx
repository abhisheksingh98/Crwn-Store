import React from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItemsTotal,
  selectCartItems
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  ChecOutPageContainer,
  CheckOutHeaderContainer,
  HeaderBlockContainer,
  TotalPriceContainer,
  TestWarningContainer
} from "./checkout.styles.jsx";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <ChecOutPageContainer>
      <CheckOutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckOutHeaderContainer>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalPriceContainer>Total $ {total}</TotalPriceContainer>
      <TestWarningContainer>
        *Please use the following test credit card for payments*
        <br />
        NUMBER: 4242424242424242
        <br />
        CVC: Any 3 digits
        <br />
        DATE: Any future date
      </TestWarningContainer>
      <StripeCheckoutButton price={total} />
    </ChecOutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
