import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Calendar } from "antd";
import { TimePicker } from "antd";
import moment from "moment";
import ModalDiv from "../DoctorModal/Modal";
import Style from "./ModalPage.module.scss";
const ModalPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }
  const format = "h:mm a";
  return (
    <div >
      <Button type="primary" onClick={showModal} style={{borderRadius:10}}>
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
          <label htmlfor='date'>Select Date</label>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>

        <div className={Style["M-modalpage__time"]}>
          <label htmlfor='time'>Select Time</label>
          <TimePicker defaultValue={moment("12:08", format)} format={format} />
        </div>
        <div className={Style["M-modalpage__btn"]}>
          <ModalDiv/>
        </div>
      </Modal>
    </div>
  
  );
};

export default ModalPage;
