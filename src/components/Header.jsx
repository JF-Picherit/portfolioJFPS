import React from "react";
import Icon from "./Icon";

function Header({medias}) {
    const mediasElem = medias.map(
        (media) => {
            return <a href={media.url} target="_blank" key={media.id}>
                <Icon iconName={media.icon} title={media.text} optionalClass="hover-opacity large"/>
            </a>
        }
    ); 

    return (
        <header className="header margin-bottom" >
            <div className="header-left">
                { mediasElem }
            </div>
        </header>
    );
}

export default Header;