import React from "react";
import Style from "./DoctorProfile.module.scss";
import DoctorInfo from "../../organisms/DoctorInfo/DoctorInfo";
import DoctorBanner from "../../organisms/DoctorBanner/DoctorBanner";

const DoctorProfile = (props) => {
  return (
    <div className={Style["t-DocProfile"]}>
      <DoctorBanner />
      <DoctorInfo />
    </div>
  );
};
export default DoctorProfile;
