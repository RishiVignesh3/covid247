import React from "react";
import style from "./CheckoutBox.module.scss";
import Buttons from "../../atoms/Buttons/Buttons.js";
import {Link} from "react-router-dom"


const CheckoutBox = (props) => {
  return (
    <div className={style["m-checkout-box"]} data-test="checkout-box">
      <hr></hr>
  <div className={style["m-checkout-box__subtotal"]}>   
    <div className={style["m-checkout-box__total"]}>subtotal</div>
      <div className={style["m-checkout-box__price"]}>₹1990</div>
    </div> 
<div className={style["m-checkout-box__shipping"]}>
      <div className={style["m-checkout-box__total"]}>shipping</div>
      <div className={style["m-checkout-box__price"]}>₹10</div>
</div>
<div className={style["m-checkout-box__whole"]}>
      <div className={style["m-checkout-box__total"]}>Total</div>
      <div className={style["m-checkout-box__price"]}>₹2000</div>
  </div>
     
      <div className={style["m-checkout-box__button"]}>
      <Link to="/payment"><Buttons  id="checkout-btn" btnType= 'success' name="PROCEED TO CHECKOUT" width="13" height="3rem" /></Link>
      </div>
    </div>
  );
};

export default CheckoutBox;
