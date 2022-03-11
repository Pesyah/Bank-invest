import React from 'react';
import './topic.css'

const Topic = (props) => {
    return (          
        <div className="lesson-block test-block" onClick={ () => {props.onClick(); sessionStorage.setItem('here', `lec${props.number}`)}}>
                <p href="#" className="test-block-theme">Тема №{props.number}</p>
                <h4 className="theme-name">{props.name}</h4>
        </div>
    );
};

export default Topic;
// sessionStorage.setItem('here', `lec${props.number}`)