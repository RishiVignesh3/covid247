import Cards from "../../molecules/DoctorCards/Cards";
import Style from "./DoctorInfo.module.scss";
import { gql, useQuery } from "@apollo/client";

const Docinfo = gql`
  {
    doctorProfile {
      id
      name
      description
      price
      rating
    }
  }
`;
const DoctorDetails = () => {
  const { loading, error, data } = useQuery(Docinfo);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  const doctorList = data.doctorProfile.map((doctor) => (
    <Cards
      id={doctor.id}
      name={doctor.name}
      speciality={doctor.description}
      price={doctor.price}
      value={doctor.rating}
      modal={true}
    />
  ));
  return (
    <div>
      {/* <SearchBar options={option} placeholder="search for specialist"/> */}
      <div className={Style["O-DoctorInfo"]}>{doctorList}</div>
    </div>
  );
};
export default DoctorDetails;
