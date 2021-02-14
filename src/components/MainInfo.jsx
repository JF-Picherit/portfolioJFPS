import React, { useState } from "react";
import PropTypes from 'prop-types';


function MainInfo({urlPhoto, firstName, lastName}) {
    return <div className="display-container mainInfo">
        <img id="profile" src={urlPhoto} />
        <div className="display-bottomleft basic-container text-white">
            <h3 className="student-name">{firstName}<br/>{lastName}</h3>
        </div>
    </div>
}

MainInfo.propTypes = {
    urlPhoto: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
}

export default MainInfo;