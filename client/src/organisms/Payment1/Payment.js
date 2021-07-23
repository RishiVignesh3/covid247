
import React, { useState } from "react";
import style from "./Payment.module.scss";
import Buttons from "../../atoms/Buttons/Buttons";
import { Radio, Card, Select, Space } from "antd";
import { gql, useMutation } from "@apollo/client";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const Appointment = gql`
  mutation addAppointment($id: String!, $doctorid: String!, $date: String!, $time: String!) {
    addAppointment( id: $id, doctorid: $doctorid, date: $date, time: $time) {
      id
      date
      time
    }
  }
`;
const patient = gql`
  mutation addPatientInfo(
    $appointmentID: String!
    $name: String!
    $mobileNo: String!
    $age: Int!
    $gender: String!
    $bloodGroup: String!
    $address: String!
  ) {
    addPatientInfo(
      appointmentID: $appointmentID
      name: $name
      mobileNo: $mobileNo
      age: $age
      gender: $gender
      bloodGroup: $bloodGroup
      address: $address
    ) {
      name
      age
      gender
      bloodGroup
      address
    }
  }
`;

const { Option } = Select;

const Payment = (props) => {

  const history = useHistory();
  const [value, setValue] = useState(1);
  const [addAppointment ] = useMutation(Appointment);
  

     
  const [addPatientInfo] = useMutation(patient);
  
  const Submit = () => {
    const id = Math.random().toString(30).slice(5)
    addAppointment({
      variables: { id, doctorid: props.doctorid, ...props.appointment },
    });
    
    addPatientInfo({
      variables:{appointmentID:id, ...props.patientinfo},
     });
    
    
    alert("Order Successfully Placed");
    history.push("/consult");
  };


  const onChange = (e) => {
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
          btnType="success"
          borderRadius="7px"
          onClick={Submit}
        ></Buttons>
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    appointment: state.consultation.appointment,
    patientinfo: state.consultation.patientinfo,
    doctorid: state.consultation.docid,
  };
};
export default connect(mapStateToProps)(Payment);
