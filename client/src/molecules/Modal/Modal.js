import React, { Component } from 'react';
import { Modal } from 'antd';
import InputField from '../../atoms/InputField/InputField';
import RadioButton from '../../atoms/RadioButton/RadioButton';
import TextAreaInput from '../../atoms/TextArea/TextArea';
import style from './Modal.module.scss';
import Buttons from '../../atoms/Buttons/Buttons';

class ModalDiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
      isNameOk: false,
      isMobileOk: false,
      isAgeOk: false,
      isGenderOk: false,
      isBloodGroupOk: false,
      isAddressOk: false
    }
  }

  showModal = () => {
    this.setState({ isModalVisible: true })
  };

  handleOk = () => {
    const bookHospitalData = {
      name: document.getElementById('nameInputModal').value,
      mobileNo: document.getElementById('mobileInputModal').value,
      age: document.getElementById('ageInputModal').value,
      gender: document.getElementById('genderInputModal').value,
      bloodGroup: document.getElementById('bloodGroupInputModal').value,
      address: document.getElementById('addressInputModal').value
    }
    console.log(bookHospitalData)
    this.setState({ isModalVisible: false })
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false })
  };

  validator = (event) => {
    const id = event.target.id
    const value = event.target.value
    const onlyAlpha = /^[a-zA-Z ]+$/;

    switch (id) {
      case "nameInputModal":
        if (onlyAlpha.test(value) && value.trim().length !== 0) {
          this.setState({ isNameOk: true }, function () {
            if (this.state.isNameOk) {
              document.getElementById(id).style.border = '2px solid green';
            }
          })
        }
        else {
          this.setState({ isNameOk: false }, function () {
            if (!this.state.isNameOk) {
              document.getElementById(id).style.border = '2px solid red';
            }
          })
        }
        break;

      case "mobileInputModal":
        if (Number(value) && value.trim().length === 10) {
          this.setState({ isMobileOk: true }, function () {
            if (this.state.isMobileOk) {
              document.getElementById(id).style.border = '2px solid green';
            }
          })
        }
        else {
          this.setState({ isMobileOk: false }, function () {
            if (!this.state.isMobileOk) {
              document.getElementById(id).style.border = '2px solid red';
            }
          })
        }
        break;

      case "ageInputModal":
        if (Number(value) && value.trim().length !== 0) {
          this.setState({ isAgeOk: true }, function () {
            if (this.state.isAgeOk) {
              document.getElementById(id).style.border = '2px solid green';
            }
          })
        }
        else this.setState({ isAgeOk: false }, function () {
          if (!this.state.isAgeOk) {
            document.getElementById(id).style.border = '2px solid red';
          }
        })
        break;

      case "genderInputModal":
        if (value === "Male" || value === "Female" || value === "Other") this.setState({ isGenderOk: true })
        else this.setState({ isGenderOk: false })
        break;

      case "bloodGroupInputModal":
        if (value.trim().length !== 0) {
          this.setState({ isBloodGroupOk: true }, function () {
            if (this.state.isBloodGroupOk) {
              document.getElementById(id).style.border = '2px solid green';
            }
          })
        }
        else {
          this.setState({ isBloodGroupOk: false }, function () {
            if (!this.state.isBloodGroupOk) {
              document.getElementById(id).style.border = '2px solid red';
            }
          })
        }
        break;

      case "addressInputModal":
        if (value.trim().length !== 0) {
          this.setState({ isAddressOk: true }, function () {
            if (this.state.isAddressOk) {
              document.getElementById(id).style.border = '2px solid green';
            }
          })
        }
        else {
          this.setState({ isAddressOk: false }, function () {
            if (!this.state.isAddressOk) {
              document.getElementById(id).style.border = '2px solid red';
            }
          })
        }
        break;

      default:
        break;
    }
  }
  componentDidUpdate() {
    if (this.state.isNameOk && this.state.isMobileOk && this.state.isAgeOk && this.state.isGenderOk && this.state.isBloodGroupOk && this.state.isAddressOk) {
      document.getElementById('bookingHospitalBtn').disabled = false;
      document.getElementById('bookingHospitalBtn').style.backgroundColor = "green"
    } else {
      document.getElementById('bookingHospitalBtn').disabled = true
      document.getElementById('bookingHospitalBtn').style.backgroundColor = "black"
    }
  }
  render() {
    return (
      <>
        <Buttons icon='edit' name="Book" fontSize="larger" btnType="success" borderRadius={"0"} width={"10rem"} height={"3.5rem"} onClick={this.showModal} />
        <Modal className={style['m-modal']} title="Booking Page" footer={null} visible={this.state.isModalVisible} onCancel={this.handleCancel} maskClosable={false}>
          <form id="BookingModalForm">
            <InputField id="nameInputModal" onChange={this.validator} placeholder="Patient's name*" />
            <InputField id="mobileInputModal" onChange={this.validator} placeholder="Contact Number(Enter 10 digits)*" />
            <div className={style['m-modal__age']}>
              <label htmlFor="ageInputModal">Patient's Age<span style={{ color: "red" }}>*</span></label>
              <input type="number" id="ageInputModal" style={{border:'1px solid #D9D9D9',outline:'none'}} min='1' max='99' onChange={this.validator} />
            </div>
            <div className={style['m-modal__gender']}>
              <label htmlFor="gender">Patient's Gender<span style={{ color: "red" }}>*</span></label>
              <RadioButton id="genderInputModal" value1='Male' value2='Female' value3="Other" onChange={this.validator} />
            </div>
            <InputField id="bloodGroupInputModal" onChange={this.validator} placeholder="Blood group*" />
            <TextAreaInput id="addressInputModal" onChange={this.validator} placeholder="Address*" rows="3" />
            <div className={style['m-modal__btnDiv']}><Buttons id="bookingHospitalBtn" btnType='dark' name="Book"  width={"7rem"} height={"3.5rem"} onClick={this.handleOk} /></div>
          </form>
        </Modal>
      </>
    );
  }

};

export default ModalDiv;