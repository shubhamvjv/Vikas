import React from "react";

function Featurebox(props) {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={props.image} alt='' />
            </div>
            <div className="a-b-text">
                <h2> {props.title} </h2>
                <p>{props.description}</p>
                <button className="consult-btn" onClick={props.onConsultClick}>Consult Now</button> {/* Trigger popup on click */}
            </div>
        </div>
    );
}

export default Featurebox;
