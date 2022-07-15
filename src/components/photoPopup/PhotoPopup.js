import React, { useState } from "react";
import './PhotoPopup.css';

export default function PhotoPopup(props) {
    const [classPopup, setClassPopup] = useState('')
    function stoppedOpenPopup() {
        setClassPopup(` ${props.isOpen ? 'popup_opened' : ''}`);
    }
    setTimeout(stoppedOpenPopup, 100);
    return (
        <div className={`photoPopup ${classPopup}`}>
            <div className=" photoPopup__container">
                <img className="photoPopup__image" src={props.clickCard.src} alt={props.clickCard.name} />
                <button aria-label="Закрыть фото" 
                type="button" 
                className="photoPopup__closeButton opacity" 
                onClick={props.onClose}></button>
                <h2 className="photoPopup__name">{props.clickCard.titlt}</h2>
            </div>
        </div>
    )
}
