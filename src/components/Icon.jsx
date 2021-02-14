import React, { useState } from "react";
import PropTypes from 'prop-types';

function Icon({iconName, title=null, optionalClass=""}) {
        return <i className={"fa fa-fw " + iconName + " " + optionalClass} title={title}></i>
}

Icon.propTypes = {
    iconName : PropTypes.string,
    title: PropTypes.string,
    optionalClass: PropTypes.string
}

export default Icon;