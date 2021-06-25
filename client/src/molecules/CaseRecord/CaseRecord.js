import React from "react";
import TotImage from "./icon-active.png"
import InactiveImage from "./icon-inactive.png"
import DeathImage from "./icon-death.png"
import Style from "./CaseRecord.module.scss";

const records = [
  { name: "Total", cases: 1111111 },
  { name: "Active", cases: 12121212 },
  { name: "Recovered", cases: 121212 },
  { name: "Deceased", cases: 22222 },
];

const CaseRecord = () => {
  return (
    <div className={Style["parent"]}>
      <div className={Style["parent__content"]}>
        {records.map((items) => (
          <div key={items.name} >
            <div className={Style["parent__content__inner"]}>{items.name == "Total" || items.name == "Recovered" ? (
              <img src={TotImage} />
            ) : items.name == "Active" ? (
              <img src={InactiveImage} />
            ) : (
              <img src={DeathImage} />
            )}</div>
            <p className={Style[items.name]}>
              {items.name} : {items.cases}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseRecord;
// ../../atoms/Images/icon-active.png