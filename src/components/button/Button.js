import React,{ useState } from "react";
import './Button.css'

export default function Button(props){
   
    return(
        <button className="button" type='submit' onClick={props.handleSubmit}>Найти</button>
    )
}