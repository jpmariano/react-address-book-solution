import React from 'react';

export default function Contact(props) {
    return (
        <div id={`c${props.index}`} className="contact">
            <img className="contact-photo" src={props.photo} alt={`${props.name}${props.name.slice(-1) === 's' ? "'" : "'s"} avatar`}  />
            <div className="contact-name">
                {props.name}
            </div>
            <div className="contact-address">
                {props.address}
            </div>
        </div>
    );
}
