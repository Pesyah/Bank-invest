import React from 'react';
import { useDispatch } from 'react-redux';
import "./Header.css"
import { logout } from '../../../reducers/userReducer';

const Head = (props) => {

    const dispatch = useDispatch()

    return (
        <header id="header">
            <div id="logo">
                <div id="logotype"></div>
                <h3 class="logo-zag">Интернет-портал<br/>«Предпринимательский<br/>всеобуч»</h3>
            </div>
            <nav id="header-navbar">
                <button className="navbar-btn" onClick={props.about}><a>О проекте</a></button>
                <button className="navbar-btn" onClick={props.shop}><a>Магазин</a></button>
                <button className="navbar-btn" onClick={props.courses}><a>Курс "Налоги"</a></button>
</nav>
<button id="account" onClick={() => {localStorage.clear()
                        dispatch(logout())}}><div id="a">
   {props.username}
</div></button>
</header>
    );
};

export default Head;