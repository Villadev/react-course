import React from "react";
import Draggable from "react-draggable";

const dausUrl = '<iframe src="http://a.teall.info/dice/" title="Plotly All Graph Types" ' +
    'allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" ' +
    'style="width:250px; height:300px; border:0; border-radius: 4px; overflow:hidden;" ' +
    'sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>';

class Daus extends React.Component {

    render() {
        return (
            <Draggable>
                <div className="daus">
                    <div className="daus-header"></div>
                    <div dangerouslySetInnerHTML={{ __html: dausUrl}}></div>
                </div>
            </Draggable>
        )
    }
}

export default Daus;
