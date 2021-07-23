import React from 'react'
import SearchBar from '../../atoms/SearchBar/SearchBar'
import style from './HospitalBanner.module.scss'

const HospitalBanner = (props) => {
    let options = [];
    props.hospitals.map(hospital => options.push({ value: hospital.name }))
    
    return (
        <div className={style['m-HospitalBanner']}>
            <img src="https://source.unsplash.com/random/150x125" alt="Poster" width="250" />
            <div className={style['m-HospitalBanner__SearchBar-div']}>
                <SearchBar id="HospitalSearch" options={options} placeholder="Search by hospital name" searchFn={props.searchFn} />
                <h1>Start your care now by choosing from the best of world</h1>
            </div>
        </div>
    )
}

export default HospitalBanner
