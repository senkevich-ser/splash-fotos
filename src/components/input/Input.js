import React,{ useState } from "react";
import './Input.css';

export default function Input(props){
const [value,setValue] = useState({});



    return(
        <input className="input" type='text' placeholder={props.placeholder} onChange={props.handleChange} />
    )
}

