import React from 'react';
import './RegForm.css'
const RegForm = (props) => {
   
    return (
        <div className='post'>
           <div>
                    <input onChange = {props.login}></input>
                    <input onChange = {props.password}></input>
                    <button 
                    className='btn1'
                    onClick={props.onClick}
                    >
                        {props.name}
                    </button>
              
           </div>
        </div>
    );
};

export default RegForm;