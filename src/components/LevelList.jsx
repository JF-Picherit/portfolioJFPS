import React, { useState } from "react";
import PropTypes from 'prop-types';
import GenericList from "./GenericList";
import GenericItem from "./GenericItem";

function LevelList({list, title="", className="", icon="fa-certificate"}) {
    
    return <GenericList list={list} title={title} className={className} defaultClassName={"levelList"} icon={icon} itemTemplate= {
        list.map((item) => {
            return (
                <GenericItem key={item.id} id={item.id} icon={item.icon} text={item.text} beginDate={item.beginDate} endDate={item.endDate} specializedAfterText={
                    <div className="grey-light round-xlarge small">
                        <div className="basic-container centralized round-xlarge teal" style={{width: item.percent + "%"}}>{item.percent} %</div>
                    </div>
                }
                />
            );
        })  
    }/>
}

LevelList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.objectOf({
        icon: PropTypes.element,
        text: PropTypes.string,
        id: PropTypes.number,
        title: PropTypes.string,
        url: PropTypes.string
    })),
    title: PropTypes.string,
    className: PropTypes.string
};

export default LevelList;