import React, { useState } from "react";
import searchStyle from "../../organisms/HospitalList/HospitalList.module.scss";
import HospitalBanner from "../../organisms/HospitalBannerSection/HospitalBanner";
import HospitalList from "../../organisms/HospitalList/HospitalList";
import db from "../../localDB/db";
import Cards from "../../molecules/Cards/Cards";
import {useHistory} from "react-router-dom"


function Hospital() {
  const history = useHistory()

  let searchedData;
  const [hospitals, setHospitals] = useState([]);

  const SearchedItem = (item) => {

    const CardClickHandler=()=>{
      history.push("/hospital/booking")
  }
    searchedData = item;
    if (searchedData) {
      const RegMatch = new RegExp(searchedData, "gi");
      const searchResult = db.hospitalData.filter((hospital) =>
        hospital.name.match(RegMatch)
      );
      const searchedHospitals = searchResult.map((hospital) => (
        <Cards
          id={`hospital${hospital.id}`}
          className="hospitals"
          name={hospital.name}
          value={hospital.rating}
          key={hospital.id}
          onClick={CardClickHandler}
        />
      ));
      setHospitals(searchedHospitals);
    }
  };

  return (
    <div style={{width:"75rem", margin:"0 auto"}}>
      <HospitalBanner searchFn={SearchedItem} />
      {hospitals.length !== 0 ? (
        <div className={searchStyle["hospitalsDiv"]}>{hospitals}</div>
      ) : (
        <HospitalList />
      )}
    </div>
  );
}

export default Hospital;
