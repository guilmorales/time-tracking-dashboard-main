import React from 'react'

function Aside({time, handleChange}) {
    
    return (
        <aside>
            <div className="aside-top">
            <img className="aside-image" src="../images/image-jeremy.png" alt="jeremy" />
            <div>
                <p className="description">Report for</p>
                <h1 className="title">Jeremy Robson</h1>
            </div>
            </div>
            <div className="aside-bottom">
                <label>
                    <input
                        type="radio" 
                        name="time" 
                        value="daily"
                        checked = {time === "daily"}
                        onChange={(event) => handleChange(event)}
                    />
                    <div className="time">Daily</div>
                </label>
                <label>
                    <input 
                        type="radio"
                        name="time"
                        value="weekly"
                        checked = {time === "weekly"}
                        onChange={(event) => handleChange(event)}/>
                    <div className="time">Weekly</div>
                </label>
                <label>
                    <input
                        type="radio"
                        name="time"
                        value="monthly"
                        checked = {time === "monthly"}
                        onChange={(event) => handleChange(event)}/>
                    <div className="time">Monthly</div>
                </label>
            </div>
        </aside>
    )   
}

export default Aside