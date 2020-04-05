import React from "react";

class LlistaParticipants extends React.Component {

    printParticipantsList = () => {
        return this.props.settings.players.map((p) => {
            return (
                <div key={p.name} className="item" onClick={() => this.props.settings.removePlayer(p.name)}>
                    <span className="ui avatar image" style={{background: p.color}}/>
                        <div className="content">
                            <div className="header">{p.name}</div>
                        </div>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="ui middle aligned selection list" style={{maxHeight: '164px', overflowY: 'auto'}}>
                {this.printParticipantsList()}
            </div>
        )
    }
}

export default LlistaParticipants;
