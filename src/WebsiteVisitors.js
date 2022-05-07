import React from "react";
import DemoChart from "./DemoChart"

const WebsiteVisitors = () => {
    return (
        <div className='website-visitors'>
            <p>WEBSITE VISITORS</p>
            <div className="visitors-today">
                <p className="visior-number">21,000</p>
                <p>&nbsp;&nbsp;Visitor's Today</p>
            </div>
            <div className='website-visitors-box'>
                <DemoChart />
            </div>
        </div>
    );
}

export default WebsiteVisitors;