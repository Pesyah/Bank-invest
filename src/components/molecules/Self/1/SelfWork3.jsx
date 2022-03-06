import React from 'react';

const Self3 = (props) =>{
    return (
        <div className="container-tl"> 
        {/* Основной блок (тот, что с градиентной рамкой) */}
            <div class='test-lection'>
                {/* Номер теста */}
                <p className='test-num'>Тест №3:</p>
                {/* Блок теста: */}
                <div className="test-lection-content">
                    {/* Заголовок теста */}
                    <h2 className="test-lection-content-title">Налоговый контроль в РФ</h2>
                    {/* Блок ссылок на части теста (лекция, сам тест и проч.) */}
                    <div className="test-lection-content-page">
                        {/* Неактивная ссылка */}
                    </div>
                    {/* Общий блок текста лекции */}
                        <div className="test-lection-content-text">
                            {/*  id={independentWork} */}
                            {/* Список с нумерованными компонентами */}
                            <p>Самостоятельное изучение:</p>
                            <ul className="num-ul">
                                    
                                    <li>Камеральная налоговая проверка.</li>
                                    <li> Выездная налоговая проверка.</li>
                                    <li>Мероприятия налогового контроля.</li>
                                    <li>Оформление результатов налоговой проверки.</li>
                            </ul>
                        </div>
                    <div className="test-lection-btn">
                    <button onClick={() => {props.next(); window.scroll(0,0)}}>Продолжить</button>
                    </div>
                </div>
            </div>
        </div>




        
    );
};

export default Self3;