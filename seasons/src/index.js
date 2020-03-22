import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./Spinner"

class App extends React.Component {
    state = { lat: null, errorMessage: ''};

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (error) => this.setState({errorMessage: error.message}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    renderContent() {
        let result = null;
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        } else if(this.state.errorMessage) {
            result = <div>Error: {this.state.errorMessage}</div>
        } else {
            result = <Spinner />
        }

        return result;
    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
