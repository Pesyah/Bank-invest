import React from 'react';

const Lect1 = (props) => {
    return (
        <div className="container-tl"> 
        {/* Основной блок (тот, что с градиентной рамкой) */}
            <div class='test-lection'>
                {/* Номер теста */}
                <p className='test-num'>Тест №1:</p>
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
                        {/*  id={lection} */}
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
                        <div className="test-lection-btn">
                            <button>Продолжить</button>
                        </div>
                </div>
            </div>
        </div>














        
    );
};

export default Lect1;