import React from 'react'
import TickIcon from '../../Tick.png'
import { CheckOutlined } from '@ant-design/icons';
import ModalDiv from '../../molecules/Modal/Modal'
import style from './HospitalBooking.module.scss'


const HospitalBooking = () => {
    return (
        <div className={style['Hospital-Booking']}>
            <h1>Chennai Hospitals</h1>
            <p>
                <span className={style['Hospital-Booking__paragraph']}>Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eget ante pharetra placerat vitae mattis dui. Sed orci nunc, viverra nec dapibus nec, 
                tincidunt sit amet ligula. Nullam eu erat semper, porta ex sed, volutpat enim. Phasellus lobortis urna quis est pretium elementum. Etiam eu erat diam. 
                Vestibulum bibendum tortor et purus convallis, sit amet tempor arcu consectetur. Pellentesque id eleifend libero. Aliquam consectetur ornare arcu, at iaculis 
                neque finibus id. Donec suscipit sapien at vulputate facilisis. Ut tincidunt eleifend lorem, id faucibus risus egestas eu. Vestibulum interdum eros eu porttitor 
                dictum. Aliquam condimentum, mauris a laoreet semper, purus enim scelerisque augue, eu ornare augue dolor ac eros. Etiam libero ipsum, bibendum id purus sit amet, 
                viverra sodales lectus.
            </p>
            <ul>
                <li><CheckOutlined /> Best Infrastructure</li>
                <li><CheckOutlined /> International Standards</li>
                <li><CheckOutlined /> Approved by IMA</li>
            </ul>
            <div className={style['Hospital-Booking__Img']}>
                <div><img src="https://source.unsplash.com/random/250x200" alt="Poster" /> </div>
                <div><img src="https://source.unsplash.com/random/250x200" alt="Poster" /> </div>
                <div><img src="https://source.unsplash.com/random/250x200" alt="Poster" /> </div>
                <div> <img src="https://source.unsplash.com/random/250x200" alt="Poster" /> </div>
            </div>
            <div className={style['Hospital-Booking__Availability']}>
                <p>O2 Availability <img src={TickIcon} width={25} height={20}/></p>
                <p>Beds Available - 28</p>
            </div>
            <div className={style['Hospital-Booking__modalBtn']}><ModalDiv /></div>
        </div>
    )
}

export default HospitalBooking
