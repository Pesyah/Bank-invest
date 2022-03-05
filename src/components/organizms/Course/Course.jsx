import React, { useState } from 'react';
import ModalWindow from '../../molecules/ModalWndow/ModalWindow.jsx';
import coin from './../../../img/coin.gif'
import Lec1 from '../../molecules/Lec/1/Lec1.jsx'
import Lec2 from '../../molecules/Lec/1/Lec2.jsx'
import Lec3 from '../../molecules/Lec/1/Lec3.jsx'
import Self1 from '../../molecules/Self/1/SelfWork1.jsx'
import Self2 from '../../molecules/Self/1/SelfWork2.jsx'
import Self3 from '../../molecules/Self/1/SelfWork3.jsx'
import Test1 from '../../molecules/Tests/1/Test1.jsx'
import Test2 from '../../molecules/Tests/1/Test2.jsx'
import Test3 from '../../molecules/Tests/1/Test3.jsx'


const Course = (props) => {

    const [here, setHere] = useState(sessionStorage.getItem('here'))
    const [ModalActiv, setModalActiv] =useState(false)
    const [money, setMoney] = useState( JSON.parse(localStorage.getItem('money')) ||0)
    const [ModalActive, setModalActive] =useState(false)

    function where() {
        if (here == 'lec1'){
            return <Lec1 next={ () => setHere('self1')}></Lec1>
        }
        else if (here == 'lec2'){
            return <Lec2 next={ () => setHere('self2')}></Lec2>
        }
        else if (here == 'lec3'){
            return <Lec3 next={ () => setHere('self3')}></Lec3>
        }
        else if (here == 'self1'){
            return <Self1 next={ () => setHere('test1')}></Self1>
        }
        else if (here == 'self2'){
            return <Self2 next={ () => setHere('test2')}></Self2>
        }
        else if (here == 'self3'){
            return <Self3 next={ () => setHere('test3')}></Self3>
        }
        else if (here == 'test1'){
            return <Test1 next={()=> setModalActive(true)}></Test1>
        }
        else if (here == 'test2'){
            return <Test2 next={()=> {setModalActive(true)}}></Test2>
        }
        else if (here == 'test3'){
            return <Test3 next={()=> setModalActive(true)}></Test3>
        }
    }


    return (
        <>
        <ModalWindow 
            title='Поздравляем!'
            subtitle='Вы заработали +1 монетку'
            src={coin}
            btnName='получить монетку'
            money = {JSON.parse(localStorage.getItem('money')) || 0} 
            onClick1={()=>{setModalActive(false);setMoney(money+1); localStorage.setItem('money', money+1);props.goBack()}} 
            active = {ModalActive} onClick={()=>setModalActive(false)}/>
        {where()}
        </>
    );
};

export default Course;