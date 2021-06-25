import React from "react";
import style from "./CartItem.module.scss";
import Buttons from "../../atoms/Buttons/Buttons.js";
import { CloseCircleOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const CartItem = (props) => {

  return (
    <div>
      <hr />
      <div style={{ float: 'right' }}>
        <CloseCircleOutlined style={{ fontSize: '20px', color: 'red' }} />
      </div>
      <div className={style["m-cart-item"]}>

        <div className={style["m-cart-item__product"]} >
          <img
            className={style["m-cart-item__image"]}
            src="https://picsum.photos/240"
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
            <PlusCircleOutlined style={{ fontSize: '30px' }} />
          </div>

          <Buttons
            id="Qty-btn"
            btnType='success'
            name={props.Qty}
            Size="1rem"

          />
          <div>
            <MinusCircleOutlined style={{ fontSize: '30px' }} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItem;