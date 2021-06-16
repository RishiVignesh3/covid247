import React from "react";
import style from "./Buttons.module.scss";
import { Button } from "antd";

const Buttons = (props) => {
  return (
    <div className={style["a-buttons"]}>
      <Button
        className={style["m-checkout-box__btn"]}
        onClick={props.onClick}
        data-test={props.name}
        id={props.id}
        icon={props.icon}
        type="primary"
        style={{
          width: props.width,
          height: props.height,
          color: props.color,
          backgroundColor: props.bgcolor,
          border: props.border,
        }}
      >
        {props.name}
      </Button>
    </div>
  );
};

export default Buttons;
