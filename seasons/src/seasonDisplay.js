import './SeasonDisplay.css';
import React from "react";


const seasonConfig = {
  summer: {
      text: "Let's hit, go to the beach",
      iconName: 'sun'
  },
  winter: {
      text: 'Burr, it is chilly',
      iconName: 'snowflake'

  }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const seasson = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[seasson];
    return (
        <div className={`season-display ${seasson}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )
};

export default SeasonDisplay;
