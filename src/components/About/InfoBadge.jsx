import React from "react";

// Create a random hex to color 
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

//Invers given hex
function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}

export const InfoBadge = (props) => {

    var bgColor = getRandomColor();
    var primaryColor = invertHex(bgColor);

    const style = {
        color: "black",
        backgroundColor: bgColor,
        padding: "10px",
        margin: "4px"
    }
    
    
    return <div className="badge font-jost" style={style}>{props.title}</div>;
};
