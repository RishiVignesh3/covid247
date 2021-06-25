import Cards from "../../molecules/DoctorCards/Cards";
// import ModalPage from "../../molecules/ModalPage/ModalPage";
import Style from "./DoctorInfo.module.scss";

export const dummy_docinfo = [
  {
    name: "Kani",
    speciality: "Covid consult",
    price: 350,
    rating: 4,
  },
  {
    name: "Vino",
    speciality: "Covid consult",
    price: 350,
    rating: 4,
  },
  {
    name: "Haritha",
    speciality: "Covid consult",
    price: 180,
    rating: 3,
  },
  {
    name: "Yasmin",
    speciality: "Covid consult",
    price: 350,
    rating: 4.5,
  },
  {
    name: "Kowsalya",
    speciality: "Covid consult",
    price: 350,
    rating: 4,
  },
  {
    name: "Darshini",
    speciality: "Covid consult",
    price: 350,
    rating: 4.5,
  },
  {
    name: "Dilan",
    speciality: "Covid consult",
    price: 650,
    rating: 4.5,
  },
  {
    name: "Rishi",
    speciality: "Covid consult",
    price: 550,
    rating: 4.5,
  },
];

const DoctorDetails = () => {
  const doctorList = dummy_docinfo.map((doctor) => (
    <div>
    <Cards
      name={doctor.name}
      speciality={doctor.speciality}
      price={doctor.price}
      value={doctor.rating}
      modal = {true} 
    >
     
    </Cards>
    {/* <ModalPage /> */}
    </div>
  ));
  return (
    <div>
      {/* <SearchBar options={option} placeholder="search for specialist"/> */}
      <div className={Style["O-DoctorInfo"]}>{doctorList}</div>
    </div>
  );
};
export default DoctorDetails;
