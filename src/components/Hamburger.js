import React from 'react';

const Hamburger = (props) => {
    return(
        <div className="hamburger" onClick={props.onClick}>
            <span className="patty"/>
            <span className="patty"/>
            <span className="patty"/>
        </div>
    )
}

export default Hamburger;