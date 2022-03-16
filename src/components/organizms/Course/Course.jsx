import React, { useState } from 'react';
import ModalWindow from '../../molecules/ModalWndow/ModalWindow.jsx';
import coin from './../../../img/coin.gif'
import Lec1 from '../../molecules/Lec/1/Lec1.jsx'
import Lec2 from '../../molecules/Lec/1/Lec2.jsx'
import Lec3 from '../../molecules/Lec/1/Lec3.jsx'
import Self1 from '../../molecules/Self/1/SelfWork1.jsx'
import Self2 from '../../molecules/Self/1/SelfWork2.jsx'
import Self3 from '../../molecules/Self/1/SelfWork3.jsx'
import Test from '../../molecules/Tests/1/Test.jsx'

const Course = (props) => {

    const [here, setHere] = useState(sessionStorage.getItem('here'))
    const [money, setMoney] = useState( JSON.parse(localStorage.getItem('money')) ||0)
    const [ModalActive, setModalActive] =useState(false)

    function where() {
        if (here === 'lec1'){
            return <Lec1 next={ () => setHere('self1')}></Lec1>
        }
        else if (here === 'lec2'){
            return <Lec2 next={ () => setHere('self2')}></Lec2>
        }
        else if (here === 'lec3'){
            return <Lec3 next={ () => setHere('self3')}></Lec3>
        }
        else if (here === 'self1'){
            return <Self1 next={ () => setHere('test1')}></Self1>
        }
        else if (here === 'self2'){
            return <Self2 next={ () => setHere('test2')}></Self2>
        }
        else if (here === 'self3'){
            return <Self3 next={ () => setHere('test3')}></Self3>
        }
        else if (here === 'test1'){
            return <Test src="https://onlinetestpad.com/ru/test/316030-trudovye-pravootnosheniya-9-klass" next={() => props.goBack()}></Test>
        }
        else if (here === 'test2'){
            return <Test src="https://onlinetestpad.com/ru/test/316030-trudovye-pravootnosheniya-9-klass" next={() => props.goBack()}></Test>
        }
        else if (here === 'test3'){
            return <Test src="https://onlinetestpad.com/ru/test/316030-trudovye-pravootnosheniya-9-klass" next={() => props.goBack()}></Test>
        }
    }


    return (
        <>
        {where()}
        </>
    );
};

export default Course;