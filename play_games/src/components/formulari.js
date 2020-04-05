import React from "react";

import AfegeixParticipants from "./AfegeixParticipants";
import AfegeixTaulell from "./AfegeixTaulell";
import LlistaParticipants from "./LlistaParticipants";

class Formulari extends React.Component {
    state = {open: 'hidden'};

    openModal (value){
        const modalState = value ? 'visible' : 'hidden';
        this.setState({open: modalState});
    };


    render() {
        return (
            <div>
                <div className="boto-afegir" onClick={() => this.openModal(true)}>Afegir</div>
                <div className="my-modal" style={{visibility: this.state.open}}>
                    <div className="my-modal-overlay"></div>
                    <div className="my-modal-content">
                        <div className="modal-header"></div>
                        <div className="modal-content">
                            <AfegeixTaulell addImage={this.props.settings.addTaulell}></AfegeixTaulell>
                            <AfegeixParticipants addPlayer={this.props.settings.addPlayer}></AfegeixParticipants>
                            <LlistaParticipants settings={this.props.settings}></LlistaParticipants>
                        </div>
                        <div className="modal-actions">
                            <button onClick={() => this.openModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Formulari;
