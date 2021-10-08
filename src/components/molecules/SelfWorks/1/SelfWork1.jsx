import React from 'react';

const SelfWork1 = (props) => {
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
                                <p>Самостоятельно изучить:</p>
                                <li>Финансы государства: понятие, сущность.</li>
                                <li>Воздействие государственных финансов на экономику. Фискальная политика.</li>
                                <li>Государственный бюджет.</li>
                                <li>Государственные расходы бюджета.</li>
                                <li>Формирование доходов бюджета.</li>
                                <li>Дефицит государственного бюджета.</li>
                                <li>Бюджетная стратегия РФ до 2023 года.</li>
                                <li>Принципы налогообложения.</li>
                                <li>Основные признаки налога.</li>
                                <li>Сущность налогов.</li>
                                <li>Функции налога.</li>
                                <li>Классификации налогов.</li>
                                <li>Виды налогов и типы налогообложения.</li>
                                <li>Элементы налога.</li>
                                <li>Порядок исчисления и уплаты налога.</li>
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

export default SelfWork1;