import React, { useState } from 'react';
import Head from '../../molecules/head/Head.jsx';
import myBusiness from './../../../img/myBusiness.gif'
import diamond from './../../../img/diamond.gif'
import ModalWindow from '../../molecules/ModalWndow/ModalWindow.jsx';

const Shop = (props) => {
    const [isByBusiness, setIsByBusiness] = useState(JSON.parse(localStorage.getItem('isByBusiness')) ||false)
    const [isbuyAlmaz, setIsbuyAlmaz] = useState(JSON.parse(localStorage.getItem('isbuyAlmaz')) ||false)
    const [ModalActiv, setModalActiv] =useState(false)
    const [money, setMoney] = useState( JSON.parse(localStorage.getItem('money')) ||0)

  
    function buyBusiness() {
       if(money>=10){
        setIsByBusiness(true)
        setModalActiv(true)
        localStorage.setItem('isByBusiness', true)
        localStorage.setItem('money', money-10)
       }
      
    }
    function buyAlmaz() {
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
           <Head 
            name = {props.name} courses = {props.courses}
           
           
           name = 'Выйти' onClick={props.onClick}/>
            <div className="shop">
                <div >
                    <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    <div style={{position:'relative', left:'10px'}}><h1>Курс "Малый бизнес"</h1></div>
                    <div style={{zIndex:2, position:'relative', left:'40px'}}><h2>Курс стоит 10 монеток</h2></div>
                    <img style={{position:'relative', display:'flex', top:'-60px', marginLeft: 'auto', marginRight: 'auto',width:'230px', height:'230px'}} src={myBusiness}></img>
                    <div style={{position:'relative',top:'-95px', left:'90px'}}><h3>На вашем счету: {props.money}</h3></div>
                    <button style={{fontSize: '20px', zIndex:2, top:'-90px', borderRadius:'8px', position:'relative', display:'flex', marginLeft: 'auto', marginRight: 'auto', background: 'linear-gradient(#3dc832, #fff000)'}} onClick={buyBusiness}>купить</button>
                </div>
                <div style={{ margin: '20px'}}>
                    <div className='modal__content' onClick={e=>e.stopPropagation()}>
                    <div style={{position:'relative', left:'125px'}}><h1>Алмаз</h1></div>
                    <div style={{zIndex:2, position:'relative', left:'40px'}}><h2>Алмаз стоит 5 монеток</h2></div>
                    <img style={{position:'relative', display:'flex', top:'-30px', marginLeft: 'auto', marginRight: 'auto',width:'300px', height:'230px'}} src={diamond}></img>
                    <div style={{position:'relative',top:'-95px', left:'90px'}}><h3>На вашем счету: {props.money}</h3></div>
                    <button style={{fontSize: '20px', zIndex:2, top:'-90px', borderRadius:'8px', position:'relative', display:'flex', marginLeft: 'auto', marginRight: 'auto', background: 'linear-gradient(#3dc832, #fff000)'}} onClick={buyAlmaz}>купить</button>
                </div>
            </div>    
            </div>
            </div>
        </div>
    );
};

export default Shop;