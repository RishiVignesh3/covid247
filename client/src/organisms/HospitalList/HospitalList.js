import React from 'react'
import Cards from '../../molecules/Cards/Cards'
import db from '../../localDB/db'
import style from './HospitalList.module.scss'
import {useHistory} from "react-router-dom"

const HospitalList = () => {
    const history = useHistory()
 const CardClickHandler=()=>{
     history.push("/hospital/booking")
 }


    const hospitals= db.hospitalData.map(hospital=><Cards onClick={CardClickHandler} id={`hospital${hospital.id}`} className="hospitals" name={hospital.name} value={hospital.rating} key={hospital.id}/>)

    return (
        <div className={style["hospitalsDiv"]}>
            {hospitals}
        </div>
    )
}

export default HospitalList
