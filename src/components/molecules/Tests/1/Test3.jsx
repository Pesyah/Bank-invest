import React from 'react';

const Test1 = () => {
    return (
        <div className="test-lection-content-text">
                        {/* id={test} */}
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
    );
};

export default Test1;