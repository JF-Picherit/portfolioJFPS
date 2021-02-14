import React, { useState } from "react";
import PropTypes from 'prop-types';
import GenericItem from "./GenericItem";
import Icon from './Icon';

function GenericList({list, title="", className="", defaultClassName="genericList", icon="fa-certificate",
                        itemTemplate=list.map(item => {return (<GenericItem key={item.id} id={item.id} icon={item.icon} text={item.text}/>);})}) {
    return <div className={defaultClassName + (className === "" ? "" : " " + className)}>
        {title === "" ? "" : <h2><Icon iconName={icon} />{title}</h2>}
        {itemTemplate}
    </div>;
}

GenericList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.objectOf({
        icon: PropTypes.element,
        text: PropTypes.string,
        id: PropTypes.number
    })),
    title: PropTypes.string,
    className: PropTypes.string,
    defaultClassName: PropTypes.string,
    itemTemplate: PropTypes.element
};

export default GenericList;