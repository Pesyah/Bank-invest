import React from 'react';
import './RegForm.css'
const RegForm = (props) => {
   
    return (
        <div className='post'>
           <div className='post-block'>
               <div className='post-block-inputs'>
                    <h2 className="post-block-zag">Вход</h2>
                    <p className="post-block-p">логин</p>
                    <input className='post-block-input' onChange = {props.login}></input>
                    <p className="post-block-p">пароль</p>
                    <input className='post-block-input' onChange = {props.password}></input>
                </div>
                <button 
                className='post-block-btn'
                onClick={props.onClick}
                >
                    {props.name}
                </button>
           </div>
        </div>
    );
};

export default RegForm;