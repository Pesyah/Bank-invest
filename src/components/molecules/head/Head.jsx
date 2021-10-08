import React from 'react';
import "./Header.css"

const head = (props) => {
    return (
        <header id="header">
            <div id="logo">
                <div id="logotype"></div>
                <h3 class="logo-zag">Интернет-портал<br/>«Предпринимательский<br/>всеобуч»</h3>
            </div>
            <nav id="header-navbar">
                <button className="navbar-btn"><a>О проекте</a></button>
                <button className="navbar-btn" onClick={props.shop}><a>Магазин</a></button>
                <button className="navbar-btn" onClick={props.courses}><a>Курс "Налоги"</a></button>
</nav>
<button id="account" onClick={props.onClick}><a href="#">
   {props.name}
</a></button>
</header>
    );
};

export default head;