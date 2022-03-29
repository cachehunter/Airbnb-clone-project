import React from 'react';
import './index.css';
import Image from "./airbnbtrip.jpeg"

export default function Trip() {
    return(
        <header className= "trip-pic">
            <img src={Image} alt="pictures of a waiting adventure"className="img"/>
            <h1 className="pop"> Trips With Airbnb </h1>
            <p className="text"> Start your adventure with airbnb today, amazing trips
            all over the world with one of a kind hosts and experiences! </p>
       </header>

   )
}
