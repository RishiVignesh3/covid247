import React from "react";
import style from "./search-bar.module.scss";
import Buttons from "../Buttons/Buttons";
import { AutoComplete } from "antd";

function SearchBar(props) {
  const {id,options,placeholder,searchFn}=props
  
  const searchHandler=()=>{
    const searchedItem= document.getElementById(id).value
    searchFn(searchedItem)
  }
  return (
    <div className={style['a-searchBar']}>
      <AutoComplete
        className={style['a-searchBar__input']}
        id={id}
        options={options}
        placeholder={placeholder}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
      <Buttons icon='search' btnType='success' width="6rem" height= "2rem" border="none" borderRadius="0.2rem" Size={"0.8rem"} name="Search" onClick={searchHandler} />
    </div>
  );
}

export default SearchBar;