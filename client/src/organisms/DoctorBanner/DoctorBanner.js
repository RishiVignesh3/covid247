import React from "react";
import SearchBar from "../../atoms/SearchBar/SearchBar";
import Style from "./DoctorBanner.module.scss";
const DoctorBanner = () => {
  let option = [];
  return (
    <div className={Style["o-doctorbanner"]}>
      <img alt="doctorimg" src="https://source.unsplash.com/random/170x150" />
      <div>
        <h1>We will be right there when you need us!</h1>
        <SearchBar
          id="Specialist Search"
          options={option}
          placeholder="Search for Specialist"
        />
      </div>
    </div>
  );
};

export default DoctorBanner;
