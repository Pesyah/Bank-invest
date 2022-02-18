import React from 'react';
import './topic.css'

const Topic = (props) => {
    return (          
        <div className="lesson-block test-block" onClick={props.onClick}>
            <p href="#" className="test-block-theme">Тема №{props.number}</p>
            <h4 className="theme-name">{props.name}</h4>
            <p className="theme-p"><a onClick={ () => sessionStorage.setItem('here', `lec${props.number}`)}>Лекция</a></p> 
            <p className="theme-p"><a onClick={ () => sessionStorage.setItem('here', `self${props.number}`)}>Самостоятельная работа</a></p>
            <p className="theme-p"><a onClick={ () => sessionStorage.setItem('here', `test${props.number}`)}>Тест</a></p>
        </div>
    );
};

export default Topic;
// sessionStorage.setItem('here', `lec${props.number}`)