import React from "react";

class AfegeixTaulell extends React.Component{
    state = {taulellImg: ''};

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addImage(this.state.taulellImg);
    };

    changeFile = (target) => {
        var url = URL.createObjectURL(target.files[0]);
        this.setState({taulellImg: url});
    };

    render () {
        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Image Serach</label>
                        <input type="text" name="nom" placeholder="Afegeix taulell" value={this.state.taulellImg} onChange={(e) => this.setState({taulellImg: e.target.value})}/>
                        <input type="file" onChange={(e) => this.changeFile(e.target)} />
                        <button type="submit">Afegir</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AfegeixTaulell;
