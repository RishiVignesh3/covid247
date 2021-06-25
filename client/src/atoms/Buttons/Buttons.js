import React from "react";
import style from "./Buttons.module.scss";
import { Button } from "antd";
import { SearchOutlined,EditFilled,ShoppingCartOutlined } from '@ant-design/icons';

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
    borderradius
    
  } = props;

  let bgColor = '', color = '', icon = ''
  switch (props.btnType) {
    case "dark":
      bgColor = "black"
      color = "white"
      break;

    case "danger":
      bgColor = "#d61122"
      color = "black"
      break;

    case "success":
      bgColor = "green"
      color = "white"
      break;

      case "primary":
        bgColor = "#1890ff"
        color = "white"
        break;
      
    default:
      break;
  }
  switch (props.icon) {

    case "cart":
      icon=<ShoppingCartOutlined/>
      break;

    case "search":
      icon = <SearchOutlined />
      break;

    case "edit":
      icon = <EditFilled />
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

        style={{
          border: Border ,
          width: width,
          height: height,
          color: color ? color : '',
          backgroundColor: bgColor ? bgColor : '',
          borderRadius: borderradius,
          fontWeight: Weight,
          fontSize: Size 
        }}>
        {name}
      </Button>
    </div>
  );
};

export default Buttons;
