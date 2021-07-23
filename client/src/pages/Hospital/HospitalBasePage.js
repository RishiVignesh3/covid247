import React, { useState } from "react";
import HospitalBanner from "../../organisms/HospitalBannerSection/HospitalBanner";
import HospitalList from "../../organisms/HospitalList/HospitalList";
import Loading from '../../loading_gif.gif'
import { connect } from "react-redux";
import { useQuery, gql } from "@apollo/client";

const getHospitalsData = gql`
  query Hospitals {
    hospital {
      id
      name
      seats
      oxygen
      rating
    }
  }
`;

const Hospital = (props) => {
  const [searched, setSearched] = useState(false);
  const [searchedResult,setSearchedResult]=useState([])

  const { loading, error, data } = useQuery(getHospitalsData); //Get data from Backend
  if (loading) return <div style={{display:'flex'}}><img style={{margin:'5rem auto'}} src={Loading} alt="Loading Gif"/></div>;
  if (error) return <p>Error: {error.message}</p>;

  let hospitalArray=data.hospital
  //Update after booking seats
  if(props.updatedHospital!==''){
    const index=hospitalArray.findIndex(hospital=>hospital.id===props.updatedHospital.id)
    hospitalArray[index].seats=props.updatedHospital.seats
  }
  
  const SearchedItem = (item) => {
    if (item) {
      setSearched(true); //state updatation
      const RegMatch = new RegExp(item, "gi");
      const searchResult = hospitalArray.filter((hospital) =>
        hospital.name.match(RegMatch)
      );
      setSearchedResult(searchResult)
    }
  };

  return (
    <div style={{ width: "75rem", margin: "0 auto" }}>
      <HospitalBanner hospitals={hospitalArray} searchFn={SearchedItem} />
      <HospitalList hospitals={searched ?searchedResult:hospitalArray} />
    </div>
  );
};

const mapStateToProps=state=>{
  return{
    updatedHospital:state.hospital.updatedHospital
  }
}

export default connect(mapStateToProps)(Hospital);
