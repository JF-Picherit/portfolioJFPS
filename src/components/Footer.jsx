import React from "react";
import Icon from "./Icon";

function Footer({medias}) {

    const mediasElem = medias.map(
        (media) => {
            return (
                <p>
                    <a href={media.url} target="_blank" key={media.id}>
                        <Icon iconName={media.icon} title={media.text} optionalClass="hover-opacity"/> 
                        <span>{media.text}</span>
                    </a>
                </p>
            );
        }
    ); 

    return  (
        <footer className="basic-container teal centralized margin-top">
            {mediasElem}
        </footer>
    );
}

export default Footer;