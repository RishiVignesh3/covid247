import React from "react";
import style from "./Cards.module.scss";
import { Card, Badge,Tooltip } from "antd";
import "antd/dist/antd.css";
import Rating from "../../atoms/rating/rating.js";
import Buttons from "../../atoms/Buttons/Buttons";
const { Meta } = Card;

const Cards = (props) => {
  const addToCart = () => {
  };
  return (
    <Tooltip placement='top' title={`O2 cylinders are ${props.oxygen?'readily available':'currently unavailable'} `}>
    <Badge
      count={props.count}
      id={props.id ? props.id : ""}
      className={style["m-cards"]}
      data-test="individual_card"
      onClick={props.onClick}
    >
      <Card
        hoverable
        cover={
          <img alt="example" src="https://source.unsplash.com/random/150x125" />
        }
      >
        <Meta
          title={props.name}
          description={props.price ? `price : ${props.price}$` : ''}
          data-test="meta_info"
        />
        <div className={props.alignRating ? style["m-cards__rating"] : ""}>
          <Rating value={props.value} />
        </div>
        {props.BtnNeed ? (
          <Buttons
            id="btn"
            btnType="success"
            name="Add to Cart"
            Size={"1rem"}
            icon="cart"
            onClick={addToCart}
          />
        ) : (
          ""
        )}
      </Card>
    </Badge>
    </Tooltip>
  );
};

export default Cards;
