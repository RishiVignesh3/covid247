import React from "react";
import CartStore from "../../organisms/CartStore/CartStore";
import Style from './ShoppingCart.module.scss';
import CheckoutBox from '../../molecules/CheckoutBox/CheckoutBox';

const ShoppingCart = (props) => {
  return (
    <div className={Style["t-shopping-cart"]} data-test="shopping-cart">
      <h4>ShoppingCart</h4>

      <div className={Style["t-shopping-cart__title"]}>
            <div>Product Details</div>
            <div>Price</div>
            <div>Quantity</div>
        </div>
      <div className={Style["t-shopping-cart__cartItems"]}>
        <CartStore />
        <CheckoutBox />
      </div>

    </div>
  );
};

export default ShoppingCart;
