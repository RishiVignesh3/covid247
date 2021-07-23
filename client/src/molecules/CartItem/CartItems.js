import React from "react";
import style from "./CartItem.module.scss";
import Buttons from "../../atoms/Buttons/Buttons.js";
import { CloseCircleOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { connect } from "react-redux";

const CartItem = (props) => {
 

  return (
    <div>
      <hr />
      <div style={{ float: 'right' }}>
        <CloseCircleOutlined onClick={()=>props.Remove(props.id)} style={{ fontSize: '20px', color: 'red' }} />
      </div>
      <div className={style["m-cart-item"]}>

        <div className={style["m-cart-item__product"]} >
          <img
            className={style["m-cart-item__image"]}
            src="https://source.unsplash.com/random/150x125"
            alt="banner"
          />
          <div className={style["m-cart-item__title"]}>
            {props.name}
          </div>
        </div>

        <div className={style["m-cart-item__price"]}>
          {props.price}
        </div>

        <div className={style["m-cart-item__action"]}>
          <div>
            <PlusCircleOutlined onClick={()=>props.Increment(props.id)} style={{ fontSize: '30px' }} />
          </div>

          <Buttons
            id="Qty-btn"
            btnType='success'
            name={props.qty}
            Size="1rem"

          />
          <div>
            <MinusCircleOutlined onClick={()=> {props.qty===1 ? props.Remove(props.id) : props.Decrement(props.id)}} style={{ fontSize: '30px' }} />
          </div>
        </div>
      </div>

    </div>
  );
};
/*const mapStateToProps=(state)=>{
  return {
    cartItems: state.cartItems
  }

}*/
const mapDispatchToProps=(dispatch)=>{
  return{
Increment : (id) =>dispatch({type:"INCREMENT",payload:id}),
Decrement :(id) =>dispatch({type:"DECREMENT",payload:id}),
Remove:(id) =>dispatch({type:"REMOVE",payload:id})
  }
}

export default connect(null,mapDispatchToProps)(CartItem);