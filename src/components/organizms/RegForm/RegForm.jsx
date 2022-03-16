import React from 'react';
import './RegForm.css'
import { useState } from 'react';
import { login, registration } from '../../../actions/user';
import { useDispatch } from 'react-redux';


const RegForm = (props) => {

    const [log, setLog] = useState(true)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
   
    return (
        log ?
        <>
        <div className='post'>
           <div className='post-block'>
               <div className='post-block-inputs'>
                    <h2 className="post-block-zag">Вход</h2>
                    <p className="post-block-p">Почта</p>
                    <input className='post-block-input' value={email} onChange = {(e) => {setEmail(e.target.value)}}></input>
                    <p className="post-block-p">Пароль</p>
                    <input type="password" className='post-block-input' value={password} onChange = {(e) => {setPassword(e.target.value)}}></input>
                </div>
                <button 
                className='post-block-btn'
                onClick={() => dispatch(login(email, password))}
                >
                    Отправить
                </button>
                <p></p>
                <button className='post-block-btn' onClick={() => {setLog(false)}}>У меня ещё нет аккаунта</button>
           </div>
        </div>
        </>
        :
        <>
        <div className='post'>
           <div className='post-block'>
               <div className='post-block-inputs'>
                    <h2 className="post-block-zag">Регистрация</h2>
                    <p className="post-block-p">Почта</p>
                    <input className='post-block-input' value={email} onChange = {(e) => {setEmail(e.target.value)}}></input>
                    <p className="post-block-p">Пароль</p>
                    <input type="password" className='post-block-input' value={password} onChange = {(e) => {setPassword(e.target.value)}}></input>
                    <p className="post-block-p">Имя</p>
                    <input className='post-block-input' value={username} onChange = {(e) => {setUsername(e.target.value)}}></input>
                </div>
                <button 
                className='post-block-btn'
                onClick={() => dispatch(registration(email, password, username))}
                >
                    Отправить
                </button>
                <p></p>
                <button className='post-block-btn' onClick={() => {setLog(true)}}>У меня уже есть аккаунт </button>
           </div>
        </div>
        </>
    );
};

export default RegForm;