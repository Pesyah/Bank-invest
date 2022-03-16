import React from 'react';

const Test1 = (props) => {
    return (
        <div className="container-tl"> 
        {/* Основной блок (тот, что с градиентной рамкой) */}
            <div class='test-lection'>
                {/* Номер теста */}
                <p className='test-num'>Тест №1:</p>
                {/* Блок теста: */}
                <div className="test-lection-content">
                    {/* Заголовок теста */}
                    <h2 className="test-lection-content-title">Бюджет и налоговая система РФ</h2>
                    <a target="_blank" href={props.src}>Пройти тестирование</a>
                    <p>Не забудте указать своё имя</p>
                    <div className="test-lection-btn">
                        <button onClick={() => {props.next(); window.scroll(0,0)}}>Продолжить</button>
                    </div>
                </div>
            </div>
        </div>








        
    );
};

export default Test1;