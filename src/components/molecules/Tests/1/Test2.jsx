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
                                <p className="test-lection-block-p">Налогоплательщики являются ________ налогового права</p>
                                {/* Тест */}
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>Целью</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>Субъектами</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>Предметами</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>Объектами</span>
                                    </li>
                                </ul>
                                <p className="answers-num">Выберите один ответ</p>
                            </div>
                            <div className="test-lection-block">
                                <p className="test-lection-block-p">Налогоплательщики имеют право:</p>
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>уплачивать законно установленные налоги</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>представлять в установленном порядке в налоговый орган по месту учета налоговые декларации (расчеты), если такая обязанность предусмотрена законодательством о налогах и сборах</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>получать отсрочку, рассрочку или инвестиционный налоговый кредит в порядке и на условиях, установленных Налоговым кодексом Российской Федерации</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>получать по месту своего учета от налоговых органов бесплатную информацию (в том числе в письменной форме)</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>встать на учет в налоговых органах, если такая обязанность предусмотрена НК</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>на своевременный зачет или возврат сумм излишне уплаченных либо излишне взысканных налогов, пени, штрафов</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>использовать налоговые льготы при наличии оснований и в порядке, установленном законодательством о налогах и сборах</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>вести в установленном порядке учет своих доходов (расходов) и объектов налогообложения, если такая обязанность предусмотрена законодательством о налогах и сборах</span>
                                    </li>
                                </ul>
                                <p className="answers-num">Выберите один ответ</p>
                            </div>
                            <div className="test-lection-block">
                                <p className="test-lection-block-p">Налогоплательщики обязаны:</p>
                                <ul className="test-lection-answers" radio>
                                    <li>
                                        <input type="radio"/>
                                        <span>представлять в установленном порядке в налоговый орган по месту учета налоговые декларации (расчеты), если такая обязанность предусмотрена законодательством о налогах и сборах</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>вести в установленном порядке учет своих доходов (расходов) и объектов налогообложения, если такая обязанность предусмотрена законодательством о налогах и сборах</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>на своевременный зачет или возврат сумм излишне уплаченных либо излишне взысканных налогов, пени, штрафов</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>уплачивать законно установленные налоги</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>получать отсрочку, рассрочку или инвестиционный налоговый кредит в порядке и на условиях, установленных Налоговым кодексом Российской Федерации</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>встать на учет в налоговых органах, если такая обязанность предусмотрена НК</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>получать по месту своего учета от налоговых органов бесплатную информацию (в том числе в письменной форме)</span>
                                    </li>
                                    <li>
                                        <input type="radio"/>
                                        <span>использовать налоговые льготы при наличии оснований и в порядке, установленном законодательством о налогах и сборах</span>
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