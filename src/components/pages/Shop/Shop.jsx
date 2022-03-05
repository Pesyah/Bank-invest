import React, { useState } from 'react';
import myBusiness from './../../../img/myBusiness.gif'
import diamond from './../../../img/diamond.gif'
import ModalWindow from '../../molecules/ModalWndow/ModalWindow.jsx';
import coin from './../../../img/coin.gif'
import Moneta from '../../molecules/Moneta/Moneta.jsx';
import Pig from '../../molecules/Pig/Pig.jsx';

const Shop = (props) => {
    const [isByBusiness, setIsByBusiness] = useState(JSON.parse(localStorage.getItem('isByBusiness')) ||false)
    const [isbuyAlmaz, setIsbuyAlmaz] = useState(JSON.parse(localStorage.getItem('isbuyAlmaz')) ||false)
    const [ModalActiv, setModalActiv] =useState(false)
    const [money, setMoney] = useState( JSON.parse(localStorage.getItem('money')) ||0)
    const [ModalActive, setModalActive] =useState(false)
  
    const [moneta, setMoneta] =useState(false)

    function buyBusiness() {
       if(money>=10){
        setIsByBusiness(true)
        setModalActiv(true)
        localStorage.setItem('isByBusiness', true)
        localStorage.setItem('money', money-10)
       }
      
    }

    function isCopilka() {
        setMoneta(true)
        setTimeout(()=> {
            setMoney(money+1)
            setMoneta(false)
        }, 1000)
    }

    function buyAlmaz() {
        isCopilka()
        if(money>=5){
            setIsByBusiness(false)
            setIsbuyAlmaz(true)
            setModalActiv(true)
            localStorage.setItem('isbuyAlmaz', true)
            localStorage.setItem('money', money-5)
           }
    }

    function mod(){
        if(isByBusiness) {
            return(
             <ModalWindow
             title='Поздравляем!'
             subtitle='Вы купили наш курс'
             src={myBusiness}
             btnName='получить курс'
             money = {money} 
             onClick1={()=>{setModalActiv(false);setMoney(money-10); localStorage.setItem('money', money-10)}} 
             active = {ModalActiv} onClick={()=>setModalActiv(false)}/>
            )
         
        }
         else if(isbuyAlmaz) {
         return (<ModalWindow
         title='Поздравляем!'
         subtitle='Вы купили наш алмаз'
         src={diamond}
         btnName='получить алмаз'
         money = {money} 
         onClick1={()=>{setModalActiv(false);setMoney(money-5); localStorage.setItem('money', money-5)}} 
         active = {ModalActiv} onClick={()=>setModalActiv(false)}/>)
         }
    }






    return (
        <div>
           {mod()}
            <ModalWindow 
      title='Поздравляем!'
      subtitle='Вы заработали +1 монетку'
      src={coin}
      btnName='получить монетку'
      money = {money} 
      onClick1={()=>{setModalActive(false);setMoney(money+1); localStorage.setItem('money', money+1)}} 
      active = {ModalActive} onClick={()=>setModalActive(false)}/>
     
            <div className="shop">
                <div >
                    <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    <div ><h1>Курс "Малый бизнес"</h1></div>
                    <div className='course-1' ><h2>Курс стоит 10 монеток</h2></div>
                    <img style={{width:'150px'}} src={myBusiness}></img>
                    <div className='course-3'><h3>На вашем счету: {props.money}</h3></div>
                    <button className='course-4' onClick={buyBusiness}>купить</button>
                </div>
                <div style={{ margin: '20px'}}>
                    <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    <div className='course-1'><h1>Алмаз</h1></div>
                    <div ><h2>Алмаз стоит 5 монеток</h2></div>
                    <img style={{width:'150px'}} src={diamond}></img>
                    <div className='course-3'><h3>На вашем счету: {props.money}</h3></div>
                    <button  onClick={buyAlmaz}>купить</button>
                </div>
                {moneta && <><Moneta/> <Pig/></>}
            </div>    
            </div>
            </div>
        </div>
    );
};

export default Shop;