import SearchBar from "../../atoms/SearchBar/SearchBar";
import style from "./medicinebanner.module.scss";

 

 
const Medicinebanner = (props) => {
  let options = [];
  props.medicines.map((medicine) => options.push({ value: medicine.Name }));
  return (
    <div className={style["o-medicinebanner"]}>
      <div >
        <h1><span>Covid care</span> in your own hands</h1>
        <SearchBar
          id="Medicine Search"
          searchFn={props.searchFn} 
          options={options}
          placeholder="Search for Medicine"
        />
      </div>
      <img alt="medicineimg" src="https://source.unsplash.com/random/150x125" />
    </div>
  );
};
export default Medicinebanner;