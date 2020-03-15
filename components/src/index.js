import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className='ui contaienr comments'>
            <ApprovalCard>
                <div>
                    <h4>Titol</h4>
                    Test de que passa amb text
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Josep"
                    timeAgo="Avui a las 18:30"
                    avatar={faker.image.avatar()}
                    content="Has escrit un bon post"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Maria"
                    timeAgo="Avui a les 9:45"
                    avatar={faker.image.avatar()}
                    content="Has escrit una merda de post"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Arnau"
                    timeAgo="Ahir a les 11:55"
                    avatar={faker.image.avatar()}
                    content="Molt be! segueix així"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
