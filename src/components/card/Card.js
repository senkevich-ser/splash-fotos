import React from "react";
import './Card.css';

export default function Card(props){

function clickCard(){
    props.handelCardClick(props.item);
}

    return(
        <div className="card">
         <img src={props.item.src} alt={props.item.alt} className="card-img" onClick={clickCard}/>
         <div className="card-titles">
            <h3 className="card-title title-cutter">{props.item.title}</h3>
            <h4 className="card-subtitle">{props.item.subtitle}</h4>
         </div>
      </div>
    )
}

