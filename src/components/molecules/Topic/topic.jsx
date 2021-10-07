import React from 'react';
import Exam from '../../atoms/Exam/Exam';
import './topic.css'

const Topic = (props) => {
    return (          
        <div className="lesson-block test-block">
            <p href="#" className="test-block-theme">Тема №{props.number}</p>
            <h4 className="theme-name">{props.name}</h4>
            <p className="theme-p"><button  onClick={ props.lection}>Лекция</button></p>
            <p className="theme-p"><button  onClick={ props.selfWork}>Самостоятельная работа</button></p>
            <p className="theme-p"><button style={{border: 'white', backgroundColor: 'white'}} onClick={ props.test}>Тест</button></p>
        </div>
    );
};

export default Topic;