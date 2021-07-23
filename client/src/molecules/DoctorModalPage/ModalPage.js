import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Calendar } from "antd";
import { TimePicker } from "antd";
import moment from "moment";
import ModalDiv from "../DoctorModal/Modal";
import Style from "./ModalPage.module.scss";
import { connect} from "react-redux";
const ModalPage = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    props.getDocID(props.id);
    setIsModalVisible(true);
  };
  const handleOk = () => {
    
  props.getAppointment({date:dateValue,time:timeValue});
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const format = "h:mm a";
  let dateValue;
  function onPanelChange(value, mode) {
    dateValue = value && value.format("YYYY-MM-DD");
  }
  let timeValue;
  function onTimeChange(value, mode) {
    timeValue = value && value.format(format);
  }
  
  return (
    <div>
      <Button type="primary" onClick={showModal} style={{ borderRadius: 10 }}>
        Book Appointment
      </Button>
      <Modal
        className={Style["M-modalpage"]}
        title="Fix your Date and Time"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className={Style["M-modalpage__date"]}>
          <label htmlFor="date">Select Date</label>
          <Calendar fullscreen={false} onChange={onPanelChange} />
        </div>
        <div className={Style["M-modalpage__time"]}>
          <label htmlFor="time">Select Time</label>
          <TimePicker
            defaultValue={moment("12:08", format)}
            format={format}
            onChange={onTimeChange}
          />
        </div>
        <div className={Style["M-modalpage__btn"]} onClick={handleOk}>
          <ModalDiv date={dateValue} time={timeValue} />
        </div>
      </Modal>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAppointment: (data) =>
    dispatch({ type: "GET_APPOINTMENT", payload: data }), 
  getDocID: (data) => dispatch({ type: "GET_DOCID", payload: data }),
  }}
export default connect(null,mapDispatchToProps)(ModalPage);
