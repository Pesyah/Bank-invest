import React from 'react';
import Topic from '../../molecules/Topic/topic.jsx'
import Exam from '../../atoms/Exam/Exam.jsx'


const Courses = (props) => {

    const TOPICS = [
        { number: 1 , name: 'Бюджет и налоговая система РФ'},
        { number: 2 , name: 'Права и обязанности налогоплательщиков'},
        { number: 3 , name: 'Налоговый контроль в РФ'},
    ]
    
    return (
        <div className="container">
            <div className="content-content">
                <div>
                <Exam/>
                { TOPICS.map((topic) => {
                return(
                    <Topic 
                    number={topic.number} 
                    name={topic.name}
                    onClick={props.onClick}/>
                )
            })}
                </div>
            </div>
        </div>
    );
};

export default Courses;