import React from 'react';

export default function Contact(props) {
    return (
        <div className="contact">
            <img className="contact-photo" src={props.photo} alt="Contact photo" />
            <h2 className="contact-name">
                {props.name}
            </h2>
            <div className="contact-address">
                {props.address}
            </div>
        </div>
    );
}
