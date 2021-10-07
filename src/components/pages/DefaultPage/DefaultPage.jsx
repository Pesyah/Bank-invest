import React, { useState } from 'react';
import Head from '../../molecules/head/Head.jsx';
import Footer from '../../molecules/Footer/Footer.jsx'
import Topic from '../../molecules/Topic/topic.jsx'
import './DefaultPage.css'
import TestForm from '../../organizms/TestForm/TestForm.jsx';
import Lect1 from '../../molecules/Lections/1/Lect1.jsx';
import SelfWork1 from '../../molecules/SelfWorks/1/SelfWork1.jsx';

import Exam from '../../atoms/Exam/Exam.jsx';
// import TestForm from '../../organizms/TestForm/TestForm.jsx'

const DefaultPage = (props) => {

    let drawLec = false

    const [lec1, setLection1] = useState(JSON.parse(localStorage.getItem('lection1'))|| false)
    const [lec2, setLection2] = useState(JSON.parse(localStorage.getItem('lection2'))|| false)
    const [lec3, setLection3] = useState(JSON.parse(localStorage.getItem('lection3'))|| false)

    const [swork, setWork1] = useState(JSON.parse(localStorage.getItem('selfWork1'))|| false)
    
    const TOPICS = [
    { number: 1 , name: 'Бюджет и налоговая система РФ', lec:'lection1',  lection: lection1, swork:"selfWork1", selfWork: selfWork1},
    { number: 2 , name: 'Права и обязанности налогоплательщиков', lec:'lection2',  lection: lection2, swork:"selfWork1", selfWork: selfWork1},
    { number: 3 , name: 'Налоговый контроль в РФ', lec:'lection3',  lection: lection3},
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
        localStorage.clear()
        localStorage.setItem('lection1', 'true' )
        setLection1(true)
    }

    function lection2() {
        localStorage.clear()
        localStorage.setItem('lection2', 'true' )
        setLection2(true)
    }

    function lection3() {
        localStorage.clear()
        localStorage.setItem('lection2', 'true' )
        setLection3(true)
    }

    function selfWork1() {
        localStorage.clear()
        localStorage.setItem('selfWork1', 'true' )
        setWork1(true)
    }

    function goToCourses() {
        localStorage.clear()
        setLection1(false)
    }

    let compon = null

// Lections
    if (compon === null){
        let needLec = TOPICS.filter((x) => JSON.parse(localStorage.getItem(x.lec))==true)
    if (needLec.length !== 0){
        if (needLec[0].lec === 'lection1'){
            compon = <Lect1/>
        }
        // else if (needLec[0].lec === 'lection2'){
        //     compon = <Lect2/>
        // }
        // else if (needLec[0].lec === 'lection3'){
        //     compon = <Lect3/>
        // }
    }
}

// SelfWorks
if (compon === null){
    let needLec = TOPICS.filter((x) => JSON.parse(localStorage.getItem(x.swork))==true)
if (needLec.length !== 0){
    console.log(needLec[0].swork === 'selfWork1')
    if (needLec[0].swork === 'selfWork1'){
        compon = <SelfWork1/>
    }
    // else if (needLec[0].lec === 'lection2'){
    //     compon = <Lect2/>
    // }
    // else if (needLec[0].lec === 'lection3'){
    //     compon = <Lect3/>
    // }
}
}

    return (
        JSON.parse(localStorage.getItem('selfWork1')) == true ?
        <div>
        <Head name = {props.name}
        courses = {goToCourses}
        onClick={props.onClick}/>
        {compon}
        <Footer/>
        </div>
        :  
        <div>
        <Head name = {props.name}
        courses = {goToCourses}
        onClick={props.onClick}/>
        <div className="container">
            <div className="content-content">
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
            </div>
        </div>
          <Footer/>
        </div>
           

      
    );
};

export default DefaultPage;