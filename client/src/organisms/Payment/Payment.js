import React, { useState } from "react";
import style from "./Payment.module.scss";
import Buttons from "../../atoms/Buttons/Buttons";
import { Radio, Card, Select, Space } from "antd";
 
const { Option } = Select;
 
const Payment = () => {
  const [value, setValue] = useState(1);
 
  const Submit = () => {
    alert("Order Successfully Placed")
  };
 
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
 
  return (
    <div className={style["o-paytotal"]}>
      <Card className={style["o-payment"]}> 
      <div className={style["o-paytotal__pay"]}>
        <h1>Payment Method</h1>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>Net Banking</Radio>
            <Select placeholder="Please select a Bank">
              <Option value="china">Axis Bank</Option>
              <Option value="usa">HDFC Bank</Option>
              <Option value="china">ICICI Bank</Option>
              <Option value="china">Canara Bank</Option>
            </Select>
            <Radio value={2}>Other UPI</Radio>
            <Radio value={3}>Cash on delivery</Radio>
            <Radio value={4}>Add Debit/Credit Card</Radio>
          </Space>
        </Radio.Group>
      </div>
      <Buttons
        className={style["o-btn"]}
        name="Proceed"
        width="7"
        height="3rem"
       btnType= 'success'
        borderRadius="7px"
        onClick={Submit}
      ></Buttons>
      </Card>
    </div>
  );
};
 
export default Payment;