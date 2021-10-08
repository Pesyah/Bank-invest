import React from 'react';
import Exam from '../../atoms/Exam/Exam';
import './topic.css'

const Topic = (props) => {
    return (          
        <div className="lesson-block test-block">
            <p href="#" className="test-block-theme">Тема №{props.number}</p>
            <h4 className="theme-name">{props.name}</h4>
            <p className="theme-p"><a onClick={ props.lection}>Лекция</a></p>
            <p className="theme-p"><a onClick={ props.selfWork}>Самостоятельная работа</a></p>
            <p className="theme-p"><a onClick={ props.test}>Тест</a></p>
        </div>
    );
};

export default Topic;