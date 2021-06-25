import style from './pharmacypage.module.scss'
import MedicineStoreTemplate from "../../templates/medicinestoreTemplate/medicinestoreTemplate";
 
function Pharmacypage() {
  return (
    <div className={style["p-store"]}>
    <MedicineStoreTemplate/>
    </div>
  );
}
 
export default Pharmacypage;