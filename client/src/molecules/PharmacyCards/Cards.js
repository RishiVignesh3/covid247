import React, { useState } from "react";
import { connect } from "react-redux";
import style from "./Cards.module.scss";
import { Card } from "antd";
import "antd/dist/antd.css";
import Rating from "../../atoms/rating/rating.js";
import Buttons from "../../atoms/Buttons/Buttons";


const { Meta } = Card;

const Cards = (props) => {
  const [disable, setDisable] = useState(false);
 

  const addToCart = () => {
  
    setDisable(!disable)
    props.AddCart({ Name: props.name, price: props.price, id: props.id });
    
  };

  return (
    <div className={style["m-cards"]} data-test="individual_card">
      <Card
        hoverable
        id={props.id ? props.id : ""}
        cover={
          <img alt="example" src="https://source.unsplash.com/random/150x125" />
        }
        onClick={props.onClick}
      >
        <Meta
          title={props.name}
          description={props.price ? `price : ${props.price}$` : ""}
          data-test="meta_info"
        />
        <div className={props.alignRating ? style["m-cards__rating"] : ""}>
          <Rating value={props.rating} />
        </div>
        {props.BtnNeed ? (
          <Buttons
            id={props.id}
            btnType="success"
            name="Add to Cart"
            disabled={disable}
            Size={"1rem"}
            icon="cart"
            onClick={addToCart}
          />
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    
    AddCart: (Itemsdata) =>
      dispatch({ type: "CART_ITEMS", payload: Itemsdata }),
  
  };
};


export default connect(null, mapDispatchToProps)(Cards);
