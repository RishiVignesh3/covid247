import Cards from "../../molecules/PharmacyCards/Cards";
import style from "./medicinestore.module.scss";


 
 
const MedicineStore = (props) => {

  const medList = props.medicines.map((med) => {
          return (
          <Cards 
          BtnNeed='true'
          key={med.id}
          id={med.id}
          name={med.Name} 
          price={med.price}
          rating={med.rating} />
        )})
  return (
    <div>
      
      <div className={style["o-List"]}>{medList}</div>
    </div>
  );
};
 
export default MedicineStore;