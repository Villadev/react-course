import React from "react";
import Draggable from "react-draggable";

class Fitxes extends React.Component {


    render() {
        return (
            <Draggable>
                <div
                    key={this.props.player.name}
                    className='player'
                    style={{background: this.props.player.color}}
                    onMouseDown={this.dragMouseDown}
                >
                        {this.props.player.name}
                </div>
            </Draggable>
        )
    }
}

export default Fitxes;
