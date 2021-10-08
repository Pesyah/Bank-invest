import React from 'react';

const SelfWork2 = (props) =>{
    return (
        <div className="container-tl"> 
        {/* Основной блок (тот, что с градиентной рамкой) */}
            <div class='test-lection'>
                {/* Номер теста */}
                <p className='test-num'>Тест №{props.number}:</p>
                {/* Блок теста: */}
                <div className="test-lection-content">
                    {/* Заголовок теста */}
                    <h2 className="test-lection-content-title">{props.name}</h2>
                    {/* Блок ссылок на части теста (лекция, сам тест и проч.) */}
                    <div className="test-lection-content-page">
                        {/* Неактивная ссылка */}
                        <a href="#" className="page-a">Лекция</a>
                        {/* Активные ссылки */}
                        <a href="#" className="page-a">Самостоятельная работа</a>
                        <a href="#" className="page-a">Тест</a>
                    </div>
                    {/* Общий блок текста лекции */}
                        <div className="test-lection-content-text">
                            {/*  id={independentWork} */}
                            {/* Список с нумерованными компонентами */}
                            <ul className="num-ul">
                                    <li>Понятие налогоплательщика.</li>
                                    <li> Права и обязанности налогоплательщиков.</li>
                                    <li>Налоговые органы: их права и обязанности.</li>
                                    <li>Ответственность за нарушение налогового законодательства.</li>
                                    <li>Взыскание налоговых платежей.</li>
                            </ul>
                        </div>
                    <div className="test-lection-btn">
                    <button onClick={props.next}>Продолжить</button>
                    </div>
                </div>
            </div>
        </div>





        
    );
};

export default SelfWork2;