// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";


function getButtonText() {
    return 'Pulsa el botó';
}

// Create a React component
const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">Posa el teu nom: </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
        </div>
    )
};

// Take the React componentand show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));
