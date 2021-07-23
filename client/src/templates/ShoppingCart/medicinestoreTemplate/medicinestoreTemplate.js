import React, { useState } from "react";
import Medicinebanner from "../../organisms/medicinebanner/Medicinebanner";
import MedicineStore from "../../organisms/medicineStore/medicineStore";
import { useQuery, gql } from "@apollo/client";
import  { connect } from 'react-redux'


const getMedicineData= gql`
  query Medicines 
  {
    Medicine {
      id
      Name
      price
      rating
    }
  }
`;
 
const MedicineStoreTemplate=(props) =>{
  
  const [searched, setSearched] = useState(false);
  const [searchedResult,setSearchedResult]=useState([])
 
  const { loading, error, data } = useQuery(getMedicineData); //Get data from Backend
  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>Error: {error.message}</p>;
  
  const medicinesArray=data.Medicine
  props.getMedicineData(medicinesArray); //store in redux store
  
  const SearchedItem = (item) => {
    if (item) {
      setSearched(true); //state updatation
      const RegMatch = new RegExp(item, "gi");
      const searchResult = data.Medicine.filter((Medicine) =>
        Medicine.Name.match(RegMatch)
      );
      setSearchedResult(searchResult)
    }
  };
 
  return (
    <div style={{ width: "75rem", margin: "0 auto" }}>
      <Medicinebanner medicines={data.Medicine} searchFn={SearchedItem} />
      <MedicineStore medicines={searched ?searchedResult:data.Medicine} />
    </div>
  );
};

const mapDispatchToProps=(dispatch)=>{
  return {
    getMedicineData: (Medicinedata)=>dispatch({type:"ADD_MEDICINES",payload:Medicinedata })
  }
}
 

 
export default  connect(null,mapDispatchToProps)(MedicineStoreTemplate);
