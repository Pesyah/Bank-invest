import React from 'react';
import './topic.css'

const Topic = () => {
    return (
        <section id="content">
        <div className="container">
            <div className="content-content">
                <div id="exam-block" className="lesson-block">
                    <a href="#" className="exam-block-a">Сдать экзамен экстерном</a>
                </div>
                <div className="lesson-block test-block">
                    <p href="#" className="test-block-theme">Тема №#</p>
                    <h4 className="theme-name">Имя темы</h4>
                    <p className="theme-p"><a>Тест 1</a></p>
                    <p className="theme-p"><a>Тест 2</a></p>
                    <p className="theme-p"><a>Тест 3</a></p>
                    <p className="theme-p"><a>Тест 4</a></p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Topic;