import React from "react";
import { Card } from "antd";

import "antd/dist/antd.css";
import Rating from "../../atoms/rating/rating";
import Buttons from "../../atoms/Buttons/Buttons.js";
import ModalPage from "../DoctorModalPage/ModalPage.js";
import Style from "./Cards.module.scss";

const { Meta } = Card;
const Cards = (props) => {
  const book = () => {
  };

  return (
    <div data-test="individual_card" className={Style["m-cards"]}>
      <Card
        hoverable
        cover={
          <img alt="example" src="https://source.unsplash.com/random/150x125" />
        }
      >
        <Meta
          title={props.name}
          description={
            <div>
              <p>{props.speciality}</p>
              <p>{`Price : ${props.price}$`}</p>
            </div>
          }
          data-test="meta_info"
        />
        <Rating value={props.value} />
        {props.modal ? <ModalPage id={props.id} /> : ""}
        {props.button ? (
          <Buttons
            id="btn"
            name={props.buttonname}
            width="145px"
            height="32px"
            onClick={book}
          />
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default Cards;
