import React from "react";

class AfegeixParticipants extends React.Component{
    state = {name: '', image: ''};

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addPlayer(this.state.name, this.state.image);
        this.setState({name: '', image: ''})
    };

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Image Serach</label>
                        <input type="text" name="nom" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                        <input type="color" name="imatge" value={this.state.image} onChange={(e) => this.setState({image: e.target.value})}/>
                        <button type="submit">Afegir</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AfegeixParticipants;
