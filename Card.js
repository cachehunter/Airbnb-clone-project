import React from "react";
import Star from "./staricon.gif"

export default function Card(props){
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText="SOLD OUT";
    }else if(props.item.location === "Online"){
        badgeText="ON LINE"
    }
    return (
            <div className="card">
                { badgeText && <div className="badge">{badgeText}</div>}
                <img src={(`../images/${props.item.coverImg}`)} alt="Trips" className="trip-img"/>
                <div className="star-div">
                    <img src={Star} alt="star" className="star"/>
                    <span>{props.item.stats.rating}</span>
                    <span className="gray">({props.item.stats.reviewCount})</span>
                    <span className="gray"> • {props.item.location}</span>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <p><strong>From ${props.item.price}</strong> / person</p>
            </div>
    )
}
