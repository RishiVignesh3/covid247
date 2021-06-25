import SearchBar from "../../atoms/SearchBar/SearchBar";
import style from "./medicinebanner.module.scss";
import { dummy_medicine } from "../medicineStore/medicineStore";
 
let options = [];
dummy_medicine.map((medicine) => options.push({ value: medicine.name }));
 
const Medicinebanner = () => {
  return (
    <div className={style["o-medicinebanner"]}>
      <div >
        <h1><span>Covid care</span> in your own hands</h1>
        <SearchBar
          id="Medicine Search"
          options={options}
          placeholder="Search for Medicine"
        />
      </div>
      <img alt="medicineimg" src="https://source.unsplash.com/random/150x125" />
    </div>
  );
};
export default Medicinebanner;