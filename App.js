import './App.css';
import React from "react"
import Menu from"./Menu"
import Trip from "./Trip"
import Card from "./Card"
import Image from "./airbnbtrip.jpeg"
import data from "./data"


export default function App(){
    const cards=data.map(value=>
    {
        return <Card
            key={value.id}
            item={value}

        />
     }
   )


 return(
        <div className="container">
           <Menu/>
           <Trip/>
           <section className="cards-list">
               {cards}
           </section>
       </div>
   )
}
