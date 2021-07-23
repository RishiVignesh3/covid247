import React from "react";
import style from "./Buttons.module.scss";
import { Button } from "antd";
import {
  SearchOutlined,
  EditFilled,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Buttons = (props) => {
  const {
    name,
    Weight,
    Border,
    Size,
    onClick,
    id,

    width,
    height,
    borderradius,
  } = props;

  let bgColor = "",
    color = "",
    icon = "",
    font="";
  switch (props.btnType) {
    case "dark":
      bgColor = "black";
      color = "white";
      break;

    case "danger":
      bgColor = "#d61122";
      color = "black";
      break;

    case "success":
      bgColor = "green";
      color = "white";
      break;

    case "primary":
      bgColor = "#1890ff";
      color = "white";
      break;

      
    case "yellow":
      bgColor = "white";
      color = "brown";
      font = "Times New Roman";
      break;

    default:
      break;
  }
  switch (props.icon) {
    case "cart":
      icon = <ShoppingCartOutlined />;
      break;

    case "search":
      icon = <SearchOutlined />;
      break;

    case "edit":
      icon = <EditFilled />;
      break;

    default:
      break;
  }
  return (
    <div className={style["a-buttons"]}>
      <Button
        className={style["m-checkout-box__btn"]}
        onClick={onClick}
        data-test={name}
        id={id}
        icon={icon}
        type={props.type}
        style={{
          border: Border,
          width: width,
          height: height,
          color: color,
          backgroundColor: bgColor,
          borderRadius: borderradius,
          fontWeight: Weight,
          fontSize: Size,
          fontFamily:font,
          boxShadow: "2px 7px 5px rgba(0,0,0,0.3)"

        }}
      >
        {name}
      </Button>
    </div>
  );
};

export default Buttons;
