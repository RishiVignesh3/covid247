import React from "react";
import Cards from "../../molecules/Cards/Cards";
import style from "./HospitalList.module.scss";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
 
const HospitalList = (props) => {
  const history = useHistory();
 
  const CardClickHandler = (event) => {
    const [selectedHospital] = props.hospitals.filter((hospital) => {
      if (
        event.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.id
      ) {
        return (
          hospital.id ===
          event.target.parentElement.parentElement.parentElement.parentElement
            .parentElement.id
        );
      }
      if (
        event.target.parentElement.parentElement.id
      ) {
        return (
          hospital.id ===
          event.target.parentElement.parentElement.id
        );
      }
      return (
        hospital.id ===
        event.target.parentElement.parentElement.parentElement.id
      );
    });
    props.selectHospital(selectedHospital);
    history.push("/hospital/booking");
  };
 
  const hospitals = props.hospitals.map((hospital) => (
    <Cards
      alignRating={true}
      onClick={CardClickHandler}
      id={hospital.id}
      className="hospitals"
      name={hospital.name}
      value={hospital.rating}
      key={hospital.id}
      count={hospital.seats}
      oxygen={hospital.oxygen}
    />
  ));
 
  const noResultFound = (
    <div style={{ display: "flex" }}>
      <h1 style={{ color: "red", margin: "5rem auto" }}>No results found</h1>
    </div>
  );
 
  return (
    <>
      {props.hospitals.length === 0 ? (
        noResultFound
      ) : (
        <div className={style["hospitalsDiv"]}>{hospitals}</div>
      )}
    </>
  );
};
 
const mapDispatchToProps = (dispatch) => {
  return {
    selectHospital: (data) =>
      dispatch({ type: "HOSPITAL_CLICKED", payload: data }),
  };
};
 
export default connect(null, mapDispatchToProps)(HospitalList);