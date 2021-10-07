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
                <button className="navbar-btn"><a href={props.proj}>О проекте</a></button>
                <button className="navbar-btn"><a href={props.test}>Тест</a></button>
                <button className="navbar-btn" onClick={props.courses}>Курс "Налоги"</button>
</nav>
<button id="account" onClick={props.onClick}>
   {props.name}
</button>
</header>
    );
};

export default head;