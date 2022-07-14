import React from "react";
import './Card.css';

export default function Card(props){



    return(
        <div className="card">
         <img src={props.item.src} alt={props.item.alt} className="card-img" />
         <div className="card-titles">
            <h2 className="card-title">{props.item.title}</h2>
            <h3 className="card-subtitle">{props.item.subtitle}</h3>
         </div>
      </div>
    )
}

