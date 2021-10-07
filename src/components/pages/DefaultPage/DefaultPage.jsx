import React, { useState } from 'react';
import Head from '../../molecules/head/Head.jsx';
import Footer from '../../molecules/Footer/Footer.jsx'
import Topic from '../../molecules/Topic/topic.jsx'
import './DefaultPage.css'

import Exam from '../../atoms/Exam/Exam.jsx';
import TestForm from '../../organizms/TestForm/TestForm.jsx';


const DefaultPage = (props) => {
    const [lection11, setLection11] = useState(JSON.parse(localStorage.getItem('lection1'))|| false)
    console.log(lection11)
    
    const TOPICS = [
    { number: 1 , name: 'Бюджет и налоговая система РФ',  lection: lection1},
    // { number: 2 , name: 'Права и обязанности налогоплательщиков',lection: lection1, selfWork:selfWork1, test: test1},
    // { number: 3 , name: 'Налоговый контроль в РФ',lection: lection1, selfWork:selfWork1, test: test1},
    // { number: 4 , name: 'Налоговый контроль в РФ',lection: lection1, selfWork:selfWork1, test: test1},
    // { number: 5 , name: 'Налоговый контроль в РФ',lection: lection1, selfWork:selfWork1, test: test1},
    // { number: 6 , name: 'Налоговый контроль в РФ',lection: lection1, selfWork:selfWork1, test: test1},
    // { number: 7 , name: 'Налоговый контроль в РФ',lection: lection1, selfWork:selfWork1, test: test1},
    // { number: 8 , name: 'Налоговый контроль в РФ',lection: lection1, selfWork:selfWork1, test: test1},
    // { number: 9 , name: 'Налоговый контроль в РФ',lection: lection1, selfWork:selfWork1, test: test1},
    // { number: 10 , name: 'Налоговый контроль в РФ',lection: lection1, selfWork:selfWork1, test: test1},
    // { number: 11 , name: 'Налоговый контроль в РФ',lection: lection1, selfWork:selfWork1, test: test1},
    // { number: 12 , name: 'Налоговый контроль в РФ',lection: lection1, selfWork:selfWork1, test: test1},
]




    function lection1() {
        localStorage.setItem('lection1', 'true' )
        setLection11(true)
    }

    return (
        JSON.parse(localStorage.getItem('lection1'))== true ?
        <TestForm></TestForm>
        
        :  
        <div>
        <Head name = {props.name}
        onClick={props.onClick}/>
        <Exam/>
        { TOPICS.map((topic) => {
            return(
                <Topic 
                lection = {topic.lection}
                selfWork= {topic.selfWork}
                test = {topic.test}
                number={topic.number} 
                name={topic.name}/>
            )
        })}
          <Footer/>
        </div>
           

      
    );
};

export default DefaultPage;