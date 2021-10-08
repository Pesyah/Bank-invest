import React from 'react';
import './ModalWindow.css'
const ModalWindow = (props) => {
 

    return (
        <div style={{zIndex:1000}} className={props.active==true ? 'modal active': 'modal' } onClick={props.onClick}>
            <div className='modal__content' onClick={e=>e.stopPropagation()}>
            
                <div style={{position:'relative', left:'65px'}}><h1>{props.title}</h1></div>
                <div style={{zIndex:2, position:'relative', left:'20px'}}><h2>{props.subtitle}</h2></div>
                <img style={{position:'relative', display:'flex', top:'-30px', marginLeft: 'auto', marginRight: 'auto',width:'230px', height:'230px'}} src={props.src}></img>
                <div style={{position:'relative',top:'-95px', left:'90px'}}><h3>На вашем счету: {props.money}</h3></div>
                <button style={{fontSize: '20px', zIndex:2, top:'-90px', borderRadius:'8px', position:'relative', display:'flex', marginLeft: 'auto', marginRight: 'auto', background: 'linear-gradient(#3dc832, #fff000)'}} onClick={props.onClick1}>{props.btnName}</button>
            </div>
        </div>
    );
};

export default ModalWindow;