import React, { useState } from "react";
import PropTypes from 'prop-types';
import Icon from './Icon';

function GenericItem({id, icon="", text, specializedBeforeIcon=null, specializedAfterIcon=null, specializedAfterText=null, defaultClassName="genericItem"}) {
    return <div className={defaultClassName}>
        {specializedBeforeIcon}
        {icon !== "" ? <Icon iconName={icon} /> : ""}
        {specializedAfterIcon}
        <p className="genericItemtext">{text}</p>
        {specializedAfterText}
    </div>
}

GenericItem.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    id: PropTypes.number,
    specializedBeforeIcon: PropTypes.element,
    specializedAfterIcon: PropTypes.element,
    specializedAfterText: PropTypes.element
}

export default GenericItem;