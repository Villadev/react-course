import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {lat: null, errorMessage: null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            },
            (error) => {
                this.setState({errorMessage: error.message});
            });
    }

    render() {
        let result = null;
        if (this.state.lat) {
            result = <div>Latitude: {this.state.lat}</div>
        } else if(this.state.errorMessage) {
            result = <div>Error: {this.state.errorMessage}</div>
        } else {
            result = <div>Loading...</div>
        }

        return result;
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
