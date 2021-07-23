import React, { useEffect } from "react";
// import TickIcon from "../../Tick.png";
import { CheckOutlined,CloseOutlined } from "@ant-design/icons";
import ModalDiv from "../../molecules/Modal/Modal";
import style from "./HospitalBooking.module.scss";
import { connect } from "react-redux";
import { gql, useMutation } from "@apollo/client";
import { useHistory, Redirect } from "react-router-dom";

const HospitalBooking = (props) => {
  const history = useHistory();

  const Add_Patient = gql`
    mutation add_Patient(
      $id: String!
      $name: String!
      $mobileNo: String!
      $age: Int!
      $gender: String!
      $bloodGroup: String!
      $address: String!
    ) {
      updateHospital(
        id: $id
        name: $name
        mobileNo: $mobileNo
        age: $age
        gender: $gender
        bloodGroup: $bloodGroup
        address: $address
      ) {
        id
        seats
        patients {
          name
        }
      }
    }
  `;
  const [updateHospital, { data }] = useMutation(Add_Patient);

  const AddPatient = (info) => {
    updateHospital({ variables: { id: props.selectedHospital.id, ...info } });
    alert(
      `Your booking for ${info.name.toUpperCase()} is being processed.\nWe will get back to you shortly.`
    );
    history.push("/hospital");
  };

  useEffect(() => {
    if (data !== undefined) {
      props.updateBeds({
        id: props.selectedHospital.id,
        name: props.selectedHospital.name,
        rating: props.selectedHospital.rating,
        seats: data.updateHospital.seats,
      });
    }
  });
  return (
    <>
      {props.selectedHospital ? (
        <div className={style["Hospital-Booking"]}>
          <h1>{props.selectedHospital.name}</h1>
          <p>
            <span className={style["Hospital-Booking__paragraph"]}>Lorem</span>{" "}
            ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eget
            ante pharetra placerat vitae mattis dui. Sed orci nunc, viverra nec
            dapibus nec, tincidunt sit amet ligula. Nullam eu erat semper, porta
            ex sed, volutpat enim. Phasellus lobortis urna quis est pretium
            elementum. Etiam eu erat diam. Vestibulum bibendum tortor et purus
            convallis, sit amet tempor arcu consectetur. Pellentesque id
            eleifend libero. Aliquam consectetur ornare arcu, at iaculis neque
            finibus id. Donec suscipit sapien at vulputate facilisis. Ut
            tincidunt eleifend lorem, id faucibus risus egestas eu. Vestibulum
            interdum eros eu porttitor dictum. Aliquam condimentum, mauris a
            laoreet semper, purus enim scelerisque augue, eu ornare augue dolor
            ac eros. Etiam libero ipsum, bibendum id purus sit amet, viverra
            sodales lectus.
          </p>
          <ul>
            <li>
              <CheckOutlined /> Best Infrastructure
            </li>
            <li>
              <CheckOutlined /> International Standards
            </li>
            <li>
              <CheckOutlined /> Approved by IMA
            </li>
          </ul>
          <div className={style["Hospital-Booking__Img"]}>
            <div>
              <img
                src="https://source.unsplash.com/random/250x200"
                alt="Poster"
              />{" "}
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/250x200"
                alt="Poster"
              />{" "}
            </div>
            <div>
              <img
                src="https://source.unsplash.com/random/250x200"
                alt="Poster"
              />{" "}
            </div>
            <div>
              {" "}
              <img
                src="https://source.unsplash.com/random/250x200"
                alt="Poster"
              />{" "}
            </div>
          </div>
          <div className={style["Hospital-Booking__Availability"]}>
            <p>
              O2 Availability
              {props.selectedHospital.oxygen?<CheckOutlined style={{margin:'0 0.5rem'}}/>:<CloseOutlined style={{margin:'0 0.5rem'}}/>}
            </p>
            <p id="bedsAvailable">
              Beds Available - {props.selectedHospital.seats}
            </p>
          </div>
          <div className={style["Hospital-Booking__modalBtn"]}>
            <ModalDiv AddPatient={AddPatient} />
          </div>
        </div>
      ) : (
        <Redirect to="/hospital" />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedHospital: state.hospital.selectedHospital,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBeds: (info) =>
      dispatch({
        type: "UPDATE_SEATS",
        payload: info,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HospitalBooking);
