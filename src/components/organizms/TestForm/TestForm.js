import React, { useEffect, useState } from 'react';
import './TestForm.css'

const TestForm = () => {
    const [testPage, setTestPage] = useState(3)
    const [lection, setLection] = useState('lection')
    const [independentWork, setIndependentWork] = useState('dis-none')
    const [test, setTest] = useState('dis-none')
    function next(){
        setTestPage(testPage + 1)
        localStorage.setItem('money',"6")
        console.log(testPage)

    }
    useEffect(() => {
        if (testPage == 1){
            setLection('lection')
            setIndependentWork('dis-none')
            setTest('dis-none')
        }
        else if(testPage == 2){
            setLection('dis-none')
            setIndependentWork('independent-work')
            setTest('dis-none')
        }
        else if(testPage == 3){
            setLection('dis-none')
            setIndependentWork('dis-none')
            setTest('test')
        }
    }, testPage)
    return (
        // Контейнер для того, чтобы отцентровать блок
        <div className="container-tl"> 
        {/* Основной блок (тот, что с градиентной рамкой) */}
            <div class='test-lection'>
                {/* Номер теста */}
                <p className='test-num'>Тест №1:</p>
                {/* Блок теста: */}
                <div className="test-lection-content">
                    {/* Заголовок теста */}
                    <h2 className="test-lection-content-title">Бюджет и налоговая система РФ</h2>
                    {/* Блок ссылок на части теста (лекция, сам тест и проч.) */}
                    <div className="test-lection-content-page">
                        {/* Неактивная ссылка */}
                        <a href="#" className="page-a">Лекция</a>
                        {/* Активные ссылки */}
                        <a href="#" className="page-a">Самостоятельная работа</a>
                        <a href="#" className="page-a">Тест</a>
                    </div>
                    {/* Общий блок текста лекции */}
                        <div id={lection} className="test-lection-content-text">
                            {/* Один абзац */}
                            <p>Бюджет — это форма образования и расходования фонда денежных средств, предназначенная для  финансирования задач и  функций местного самоуправления.
    С помощью государственного бюджета власти государства получают финансовые ресурсы:
    для содержания государственного аппарата, армии;
    осуществления социальных мероприятий;
    реализации экономических задач и т.д.</p>
                            <p>Доходы бюджета отражают экономические отношения, возникающие между государством, гражданами и организациями в процессе формирования бюджетного фонда.</p>
                            <p>Расходы бюджета представляют собой экономические отношения, которые возникают между государством, гражданами и организациями в процессе распределения и использования для различных потребностей средств бюджетного фонда.</p>
                            <p>Бюджетная система Российской Федерации — основанная на экономических отношениях и государственном устройстве Российской Федерации, регулируемая нормами права совокупность федерального бюджета, бюджетов субъектов Российской Федерации, местных бюджетов и бюджетов государственных внебюджетных фондов.</p>
                            <p>Наиболее существенный источник средств — налоги, с помощью которых мобилизуются и перераспределяются средства предприятий, населения и других налогоплательщиков.</p>
                            {/* <span className="cursive"> - выделение текста курсивом */}
                            <p><span className="cursive">Налог — обязательный, индивидуально безвозмездный платеж, взимаемый с организаций и физических лиц в форме отчуждения принадлежащих им на праве собственности, хозяйственного ведения или оперативного управления денежных средств  целях финансового обеспечения деятельности государства и (или) муниципальных образований.</span></p>
                            <p><span className="cursive">Сбор — обязательный взнос, взимаемый с организаций и физических лиц, уплата которого является одним из условий совершения в отношении плательщиков сборов государственными органами, органами местного самоуправления, иными уполномоченными органами и должностными лицами юридически значимых действий, включая предоставление определенных прав на выдачу разрешений (лицензий).</span></p>
                            <p>Все налоги, действующие на территории РФ, в зависимости от уровня установления подразделяются на три вида:</p>
                            {/* Список */}
                            <ul className="ul-punt">
                                <li>
                                    <span className="cursive">федеральные </span>
                                    — налоги и сборы, устанавливаемые НК и обязательные к уплате на всей территории РФ;
                                </li>
                                <li>
                                    <span className="cursive">региональные </span>
                                    — налоги и сборы, устанавливаемые НК РФ и законами субъектов РФ, вводимые в действие в соответствии с НК РФ, законами субъектов РФ и обязательные к уплате на территориях субъектов РФ;
                                </li>
                                <li>
                                    <span className="cursive">местные </span>
                                    — налоги и сборы, устанавливаемые НК РФ и нормативными правовыми актами представительных органов местного самоуправления, вводимые в действие в соответствии с НК РФ нормативными правовыми актами представительных органов местного самоуправления и обязательные к уплате на территориях соответствующих муниципальных образований.
                                </li>
                            </ul>
                            <p>По методу взимания:</p>
                            <ul className="ul-punt">
                                <li><span className="cursive">прямые</span> налоги взимаются непосредственно с доходов или имущества налогоплательщиков;</li>
                                <li><span className="cursive">косвенные</span> налоги взимаются через цену товара.</li>
                            </ul>
                            <p>По объекту обложения выделяют:</p>
                            <ul className="ul-punt">
                                <li><span className="cursive">налоги на имущество;</span></li>
                                <li><span className="cursive">налоги на доходы (прибыль);</span></li>
                                <li><span className="cursive">налоги на определенные виды деятельности.</span></li>
                            </ul>
                            <p>По субъекту уплаты выделяют:</p>
                            <ul className="ul-punt">
                                <li><span className="cursive">налоги с физических лиц;</span></li>
                                <li><span className="cursive">налоги с организаций;</span></li>
                                <li><span className="cursive">смешанные налоги.</span></li>
                            </ul>
                            <p>При установлении налогов должны быть определены все элементы налогообложения.</p>
                            <p>Налог считается установленным лишь в том случае, когда определены налогоплательщики и элементы налогообложения, а именно:</p>
                            <ul className="ul-punt">
                                <li><span className="cursive">объект налогообложения;</span></li>
                                <li><span className="cursive">налоговая база;</span></li>
                                <li><span className="cursive">налоговый период;</span></li>
                                <li><span className="cursive">налоговая ставка;</span></li>
                                <li><span className="cursive">порядок исчисления налога;</span></li>
                                <li><span className="cursive">порядок и сроки уплаты налога.</span></li>
                            </ul>
                            <p>Налогоплательщиками и плательщиками сборов признаются организации и физические лица, на которых в соответствии с НК РФ возложена обязанность уплачивать соответственно налоги и (или) сборы.</p>
                        </div>
                        <div id={independentWork} className="test-lection-content-text">
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
                        <div id={test} className="test-lection-content-text">
                            <div className="test-lection-block">
                                <p className="test-lection-block-p">Как называются налоги и сборы, устанавливаемые НК и обязательные к уплате на всей территории РФ?</p>
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
                        <button onClick={next}>Продолжить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestForm;