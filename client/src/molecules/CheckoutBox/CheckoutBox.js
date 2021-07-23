import React from "react";
import style from "./CheckoutBox.module.scss";
import Buttons from "../../atoms/Buttons/Buttons.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { gql,useMutation } from "@apollo/client";



const CHECK_OUT = gql`
   mutation Checkout($id: String!, $Name: String!, $price: String!) {
    Checkout(id: $id, Name: $Name, price: $price)
   }
  `;
const CheckoutBox = (props) => {
 const [Checkout]=useMutation(CHECK_OUT);
  const {cartItems} = props
  const proceed =()=>{
    
    cartItems.map(item => item? Checkout ({
              variables: {id:item.id,Name:item.Name,price:item.price}
             }):""
          )

       }
  
  
  return (
    <div className={style["m-checkout-box"]} data-test="checkout-box">
      <hr></hr>
        {cartItems.length !== 0  &&  (
          <div className={style["m-checkout-box__whole"]}>
            <div >Total : $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)}
            </div>
          </div>
       )}
        
      <div className={style["m-checkout-box__button"]}>
        <Link to="/payment">
          <Buttons
            id="checkout-btn"
            btnType="success"
            onClick={proceed}
            disabled={cartItems.length !==0 ? false : true}
            name="PROCEED TO CHECKOUT"
            width="13"
            height="3rem"
          />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.pharmacy.cartItems,
  };
};

export default connect(mapStateToProps)(CheckoutBox);
