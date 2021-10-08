import React from 'react';

const Test1 = (props) => {
    return (

            // Контейнер для того, чтобы отцентровать блок
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
                        <div className="test-lection-block">
                                <p className="test-lection-block-p">Как называется деятельность уполномоченных органов по контролю за соблюдением налогоплательщиками, налоговыми агентами и плательщиками сборов законодательства о налогах и сборах, предусмотренных НК РФ?</p>
                                {/* Тест */}
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>налоговой деятельностью</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>налоговым правилом</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>налоговым финансированием</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>налоговым контролем</span>
                                    </li>
                                </ul>
                                <p className="answers-num">Выберите один ответ</p>
                            </div>
                            <div className="test-lection-block">
                                <p className="test-lection-block-p">Камеральная налоговая проверка проводится по месту нахождения:</p>
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>УФНС России по субъекту Федерации</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>налогового органа</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>МРИ ФНС России</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>налогоплательщика</span>
                                    </li>
                                </ul>
                                <p className="answers-num">Выберите один ответ</p>
                            </div>
                            <div className="test-lection-block">
                                <p className="test-lection-block-p">Срок проведения камеральной налоговой проверки:</p>
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>1 месяц</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>3 месяца</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>30 дней</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>2 месяца</span>
                                    </li>
                                </ul>
                                <p className="answers-num">Выберите один ответ</p>
                            </div>
                        </div>
                    <div className="test-lection-btn">
                        <button onClick={props.next}>Продолжить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test1;