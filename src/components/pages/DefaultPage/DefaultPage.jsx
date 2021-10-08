import React, { useState } from 'react';
import Head from '../../molecules/head/Head.jsx';
import Footer from '../../molecules/Footer/Footer.jsx'
import Topic from '../../molecules/Topic/topic.jsx'
import './DefaultPage.css'
import TestForm from '../../organizms/TestForm/TestForm.jsx';
import Lect1 from '../../molecules/Lections/1/Lect1.jsx';
import SelfWork1 from '../../molecules/SelfWorks/1/SelfWork1.jsx';
import SelfWork2 from '../../molecules/SelfWorks/1/SelfWork2.jsx';
import SelfWork3 from '../../molecules/SelfWorks/1/SelfWork3.jsx';

import Exam from '../../atoms/Exam/Exam.jsx';
import Lect2 from '../../molecules/Lections/1/Lect2.jsx';
import Lect3 from '../../molecules/Lections/1/Lect3.jsx'

import Test1 from '../../molecules/Tests/1/Test1.jsx';
import Test2 from '../../molecules/Tests/1/Test2.jsx';
import Test3 from '../../molecules/Tests/1/Test3.jsx';
import Shop from '../Shop/Shop.jsx';

const DefaultPage = (props) => {

    const [lec1, setLection1] = useState(JSON.parse(localStorage.getItem('lection1'))|| false)
    const [lec2, setLection2] = useState(JSON.parse(localStorage.getItem('lection2'))|| false)
    const [lec3, setLection3] = useState(JSON.parse(localStorage.getItem('lection3'))|| false)

    const [swork1, setWork1] = useState(JSON.parse(localStorage.getItem('selfWork1'))|| false)
    const [swork2, setWork2] = useState(JSON.parse(localStorage.getItem('selfWork2'))|| false)
    const [swork3, setWork3] = useState(JSON.parse(localStorage.getItem('selfWork3'))|| false)

    const [test1, setTest1] = useState(JSON.parse(localStorage.getItem('selfTest1'))|| false)
    const [test2, setTest2] = useState(JSON.parse(localStorage.getItem('selfTest2'))|| false)
    const [test3, setTest3] = useState(JSON.parse(localStorage.getItem('selfTest3'))|| false)

    const TOPICS = [
    { number: 1 , name: 'Бюджет и налоговая система РФ', lec:'lection1',  lection: lection1, swork:"selfWork1", selfWork: selfWork1, ts:'test1', test: myTest1 },
    { number: 2 , name: 'Права и обязанности налогоплательщиков', lec:'lection2',  lection: lection2, swork:"selfWork2", selfWork: selfWork2, ts:'test2', test: myTest2},
    { number: 3 , name: 'Налоговый контроль в РФ', lec:'lection3',  lection: lection3, swork:"selfWork3", selfWork: selfWork3, ts:'test3', test: myTest3},
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


    function clearLocal() {
        localStorage.setItem('lection1', 'false' )
        localStorage.setItem('lection2', 'false' )
        localStorage.setItem('lection3', 'false' )
        localStorage.setItem('selfWork1', 'false' )
        localStorage.setItem('selfWork2', 'false' )
        localStorage.setItem('selfWork3', 'false' )
        localStorage.setItem('test1', 'false' )
        localStorage.setItem('test2', 'false' )
        localStorage.setItem('test3', 'false' )
    }

    function lection1() {
        clearLocal()
        localStorage.setItem('lection1', 'true' )
        setLection1(true)
    }

    function lection2() {
        clearLocal()
        localStorage.setItem('lection2', 'true' )
        setLection2(true)
    }

    function lection3() {
        clearLocal()
        localStorage.setItem('lection3', 'true' )
        setLection3(true)
    }

    function selfWork1() {
        clearLocal()
        localStorage.setItem('selfWork1', 'true' )
        setWork1(true)
    }
    
    function selfWork2() {
        clearLocal()
        localStorage.setItem('selfWork3', 'true' )
        setWork2(true)
    }
    
    function selfWork3() {
        clearLocal()
        localStorage.setItem('selfWork3', 'true' )
        setWork3(true)
    }

    function myTest1() {
        clearLocal()
        localStorage.setItem('test1', 'true' )
        setTest1(true)
    }

    function myTest2() {
        clearLocal()
        localStorage.setItem('test2', 'true' )
        setTest2(true)
    }

    function myTest3() {
        clearLocal()
        localStorage.setItem('test3', 'true' )
        setTest3(true)
    }

   

    function goToCourses() {
     
        clearLocal()
        setQ(false)
        setLection1(false)
        setLection2(false)
        setLection3(false)
        setWork1(false)
        setWork2(false)
        setWork3(false)
        setTest1(false)
        setTest2(false)
        setTest3(false)
    }

    let compon = null

// Lections
    if (compon === null){
        let needLec = TOPICS.filter((x) => JSON.parse(localStorage.getItem(x.lec))==true)
    if (needLec.length !== 0){
        if (needLec[0].lec === 'lection1'){
            compon = <Lect1 name={needLec[0].name} number={needLec[0].number}  next={selfWork1}/>
        }
        else if (needLec[0].lec === 'lection2'){
            compon = <Lect2 name={needLec[0].name} number={needLec[0].number} next={selfWork2}/>
        }
        else if (needLec[0].lec === 'lection3'){
            compon = <Lect3 name={needLec[0].name} number={needLec[0].number} next={selfWork2}/>
        }
        
    }
}

// SelfWorks
if (compon === null){
    let needLec = TOPICS.filter((x) => JSON.parse(localStorage.getItem(x.swork))==true)
if (needLec.length !== 0){
    if (needLec[0].swork === 'selfWork1'){
        compon = <SelfWork1 name={needLec[0].name} number={needLec[0].number} next={myTest1}/>
    }
    else if (needLec[0].swork === 'selfWork2'){
        compon = <SelfWork2 name={needLec[0].name} number={needLec[0].number} next={myTest2}/>
    }
    else if (needLec[0].swork === 'selfWork3'){
        compon = <SelfWork3 name={needLec[0].name} number={needLec[0].number} next={myTest3}/>
    }
}
}

//  TESTS
if (compon === null){
    let needLec = TOPICS.filter((x) => JSON.parse(localStorage.getItem(x.ts))==true)
if (needLec.length !== 0){
    if (needLec[0].ts === 'test1'){
        compon = <Test1 name={needLec[0].name} number={needLec[0].number} next={goToCourses}/>
    }
    else if (needLec[0].ts === 'test2'){
        compon = <Test2 name={needLec[0].name} number={needLec[0].number} next={goToCourses}/>
    }
    else if (needLec[0].ts === 'test3'){
        compon = <Test3 name={needLec[0].name} number={needLec[0].number} next={goToCourses}/>
    }
}
}

const [q, setQ] = useState(false)
function goToShop(compon){
    clearLocal()
    setQ(true)
}

    return (

        q? <Shop courses = {goToCourses} /> :
        compon !== null ?
        <div>
        <Head name = {props.name} courses = {goToCourses} onClick={props.onClick}/>

        {compon}
        
        <Footer/>
        </div>
        :  
        <div>
        <Head name = {props.name}
        shop = {(compon)=>goToShop(compon)}
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