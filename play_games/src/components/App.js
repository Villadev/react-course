import React from "react";
import Fitxes from "./Fitxes";
import Formulari from "./formulari";
import Daus from "./Daus";


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            players: [],
            taulellImg: '',
            addPlayer: this.addPlayer,
            removePlayer: this.removePlayer,
            addTaulell: this.addTaulell
        };
    }

    addPlayer = (name, color) => {
        if(!this.state.players.find((p) => p.name === name) && name) {
            const players = this.state.players;
            players.push({
                name: name,
                color: color
            });
            this.setState({players: players});
        }
    };

    removePlayer = (name) => {
        this.setState({players: this.state.players.filter((p) => p.name !== name)});
    };

    addTaulell = (img) => {
       this.setState({taulellImg: img});
    };


    printPlayers = () => {
        return this.state.players.map((p) => {
            return <Fitxes key={p.name} player={p}/>;
        });
    };

    getTaulell = () => {
        if(this.state.taulellImg) {
          return  <img style={{width: '100%', height: '100%'}} src={this.state.taulellImg}/>;
        }
    }

    render() {
        return (
            <div className="contenidor">
                <Formulari settings={this.state}></Formulari>
                <Daus></Daus>
                <div className="taulell">
                    {this.getTaulell()}
                </div>
                {this.printPlayers()}
            </div>
        )
    }
}

export default App;
