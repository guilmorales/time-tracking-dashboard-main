import React from 'react'

function Card({item, time}) {
    const styles = {
        backgroundColor: `var(--primary-color-${item.id})`,
        backgroundImage: `url("../images/icon-${item.id}.svg")`
    }
    
    function previousTime() {
        if (time === "daily")
            return "day"
        else if (time === "weekly")
            return "week"
        else
            return "month"
    }
    
    return (
        <div className="card" style={styles}>
            <div className="card-body">
                <div className="card-body-top">
                    <h2 className="subtitle">{item.title}</h2>
                    <img src="../images/icon-ellipsis.svg" alt="ellipsis"/>
                </div>
                <div className="card-body-bottom">
                    <p className="hours">{item.timeframes[time].current}hrs</p>
                    <p className="previous-hours">
                        Last {previousTime()} - {item.timeframes[time].previous}hrs
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card