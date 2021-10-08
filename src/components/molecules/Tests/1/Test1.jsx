import React from 'react';

const Test1 = (props) => {
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
                        {/* id={test} */}
                            <div className="test-lection-block">
                                <p className="test-lection-block-p">Как называются налоги и сборы, устанавливаемые НК и обязательные к уплате на всей территории РФ?</p>
                                {/* Тест */}
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>федеральные</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>региональные</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>местные</span>
                                    </li>
                                </ul>
                                <p className="answers-num">Выберите один ответ</p>
                            </div>
                            <div className="test-lection-block">
                                <p className="test-lection-block-p">Как называются налоги и сборы, устанавливаемые НК РФ и законами субъектов РФ, вводимые в действие в соответствии с НК РФ, законами субъектов РФ и обязательные к уплате на территориях субъектов РФ?</p>
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>федеральные</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>региональные</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>местные</span>
                                    </li>
                                </ul>
                                <p className="answers-num">Выберите один ответ</p>
                            </div>
                            <div className="test-lection-block">
                                <p className="test-lection-block-p">Как называются налоги и сборы, устанавливаемые НК РФ и нормативными правовыми актами представительных органов местного самоуправления, вводимые в действие в соответствии с НК РФ нормативными правовыми актами представительных органов местного самоуправления и обязательные к уплате на территориях соответствующих муниципальных образований?</p>
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>федеральные</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>региональные</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>местные</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>бюджет</span>
                                    </li>
                                </ul>
                                <p className="answers-num">Выберите один ответ</p>
                            </div>
                            <div className="test-lection-block">
                                <p className="test-lection-block-p">Как называется форма образования и расходования фонда денежных средств, предназначенная для финансирования задач и функций местного самоуправления?</p>
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>тактика</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>стратегия</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>план</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>бюджет</span>
                                    </li>
                                </ul>
                                <p className="answers-num">Выберите один ответ</p>
                            </div>
                            <div className="test-lection-block">
                                <p className="test-lection-block-p">Как называется обязательный, индивидуально безвозмездный платеж, взимаемый с организаций и физических лиц в форме отчуждения принадлежащих им на праве собственности, хозяйственного ведения или оперативного управления денежных средств в целях финансового обеспечения деятельности государства и (или) муниципальных образований?</p>
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>тактика</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>стратегия</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>план</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>бюджет</span>
                                    </li>
                                </ul>
                                <p className="answers-num">Выберите один ответ</p>
                            </div>
                            <div className="test-lection-block">
                                <p className="test-lection-block-p">Как называются налоги и сборы, устанавливаемые НК и обязательные к уплате на всей территории РФ?</p>
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>сбор</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>налог</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>пошлина</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>доход</span>
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