import Cards from "../../molecules/Cards/Cards";
import style from "./medicinestore.module.scss";
 
export const dummy_medicine = [
  {
    name: "Paracetmol",
    price: 600,
    value: 3,
    Qty: 2
  },
  {
    name: "Dolo ",
    price: 200,
    value: 4,
    Qty: 2
  },
  {
    name: "Remdesivir dose",
    price: 107,
    value: 4,
    Qty: 2
  },
  {
    name: "Iron Tablets",
    price: 107,
    value: 4,
    Qty: 2
  },
  {
    name: "Fludarabine",
    price: 200,
    value: 4,
    Qty: 2
  },
  {
    name: "Zintac tablets",
    price: 350,
    value: 4.5,
    Qty: 2
  },
  {
    name: "Cough Tablets",
    price: 180,
    value: 3.5,
    Qty: 2
  },
  {
    name: "Sodium Tablets",
    price: 125,
    value: 2.5,
    Qty: 2
  },
  
];
 
const MedicineStore = () => {
  const medList = dummy_medicine.map((med) => (
    <Cards
      BtnNeed={true}
      name={med.name}
      price={med.price}
      value={med.value}
    />
  ));
 
  return (
    <div>
      <div className={style["o-List"]}>{medList}</div>
    </div>
  );
};
 
export default MedicineStore;