import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMoney } from '../../../actions/user';



const Admin = () => {

    const [email, setEmail] = useState("")
    const [money, setMoney] = useState("")
    const dispatch = useDispatch()

    return (
        <section id="admin-panel">
            <div className="container">
                <div className='row'>
                    <h2 className='admin-panel-zag'>Добавить пользователю монеты</h2>
                    <input value={email} onChange={(event)=> setEmail(event.target.value)} 
                    id='linkText' type="text" className="new-couse-content-inp" placeholder='Почта пользователя' />
                    <p></p>
                    <input value={money} onChange={(event)=> setMoney(event.target.value)} 
                    id='linkText' type="text" className="new-couse-content-inp" placeholder='Монеты' />
                    <div className="new-couse-content-btn-bl">
                        <button className='new-couse-content-btn' onClick={() => dispatch(addMoney(email, money))}>Добавить</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;