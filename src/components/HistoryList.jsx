import React, { useState } from "react";
import PropTypes from 'prop-types';
import GenericList from "./GenericList";
import GenericItem from "./GenericItem";
import Icon from './Icon';

function HistoryList({list, title="", className="", icon="fa-certificate"}) {
    
    function formatDate(d) {
        const to2Number = (i) => i < 10 ? "0" + i : i;
        return to2Number(d.getDate())  + "/" + to2Number(d.getMonth()+1) + "/" + d.getFullYear();
    }

    return <GenericList list={list} title={title} className={className} defaultClassName={"historyList"} icon={icon} itemTemplate= {        
        list.map((item, index, list) => {
            const hr = index !== list.length - 1 ? <hr/> : "";
            const downloadIcon = 
                (item.url == null || item.title == null) ? "" : 
                <div className="downloadFile">
                    <a href={item.url} download title={item.title} >
                        <Icon iconName="fa-download"/>
                    </a>
                </div>
            ;

            return (
                <GenericItem key={item.id} icon={item.icon == null ? "fa-calendar" : icon} text={item.text} beginDate={item.beginDate} endDate={item.endDate} specializedAfterText={[downloadIcon, hr]} specializedAfterIcon={
                    <span className="historyItemDate">{formatDate(item.beginDate)}{item.endDate == null ? "" : " - " + formatDate(item.endDate)}<br/></span>
                }
                />
            );
        })  
    }/>
}

HistoryList.propTypes = {
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

export default HistoryList;