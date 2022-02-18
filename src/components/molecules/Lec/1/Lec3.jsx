import React from 'react';

const Lect3 = (props) => {
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
                        <a href="#" className="page-a">Лекция</a>
                        {/* Активные ссылки */}
                        <a href="#" className="page-a">Самостоятельная работа</a>
                        <a href="#" className="page-a">Тест</a>
                    </div>
                    {/* Общий блок текста лекции */}
                        <div className="test-lection-content-text">
                            {/*  id={lection} */}
                                {/* Один абзац */}
                                <p>Налоговым контролем признается деятельность уполномоченных органов по контролю за соблюдением налогоплательщиками, налоговыми агентами и плательщиками сборов законодательства о налогах и сборах, предусмотренных НК РФ.</p>
                                <p>Камеральная налоговая проверка проводится по месту нахождения налогового органа уполномоченными должностными лицами налогового органа в течение трех месяцев со дня представления налогоплательщиком налоговой декларации и документов, служащих основанием для исчисления и уплаты налога, если законодательством о налогах и сборах не предусмотрены иные сроки, а также документов, собранных налоговым органом в результате иных мероприятий налогового контроля.</p>
                                <p>Целью камеральной проверки является контроль за соблюдением налогоплательщиками законодательных и иных нормативных правовых актов о налогах и сборах, выявление и предотвращение налоговых правонарушений, взыскание сумм неуплаченных (не полностью уплаченных) налогов, пени за несвоевременную уплату налогов, применение штрафных санкций в случае неисполнения обязанностей, предусмотренных законодательством о налогах и сборах.</p>
                                <p>Выездная налоговая проверка проводится уполномоченными должностными лицами налогового органа на территории (в помещении) налогоплательщика и не Федеральный орган исполнительной власти, уполномоченный по контролю и надзору в области налогов и сборов, и его территориальные органы (ФНС Росии; Управления ФНС России по субъектам РФ; ИНФС; МРИ ФНС России по субъектам РФ) Налоговые органы в бюджетную систему РФ Единая централизованная система контроля за соблюдением законодательства о налогах и сборах, за правильностью исчисления, полнотой и своевременностью уплаты (перечисления) налогов и сборов может продолжаться более двух месяцев. Указанный срок может быть продлен до четырех месяцев, а в исключительных случаях — до шести месяцев. в случаеесли у налогоплательщика отсутствует возможность предоставить помещение для проведения выездной налоговой проверки, выездная налоговая проверка может проводиться по месту нахождения налогового органа.</p>
                                <p>Проверка проводится на основании представленных налогоплательщиком всех документов (первичных учетных и иных бухгалтерских документов, регистров бухгалтерского учета, бухгалтерской отчетности и налоговых деклараций, хозяйственных и иных договоров, актов о выполнении договорных обязательств, внутренних приказов, распоряжений, протоколов, любых других документов), а также документов, собранных налоговым органом в результате дополнительных мероприятий.</p>                                                       
                                <p>Цель выездной налоговой проверки аналогична камеральной: осуществление контроля за правильностью исчисления, полнотой и своевременностью внесения в бюджет налогов и сборов, в случае неуплаты налогов налоговый орган осуществляет взыскание налогов, пени, привлечение виновных лиц к ответственности за совершение налоговых правонарушений (применение штрафных санкций).</p>   
                                <p>По результатам проведения налоговых проверок (камеральные и выездные) налоговые органы составляют акт налоговой проверки.</p>
                                <p>В акте налоговой проверки указываются документально подтвержденные факты нарушений законодательства о налогах и сборах, выявленные в ходе проверки, или запись об отсутствии таковых. Акт налоговой проверки подписывается лицами, проводившими соответствующую проверку (налоговый орган), и лицом, в отношении которого проводилась эта проверка (налогоплательщик).</p>
                                <p>Руководитель (заместитель руководителя) налогового органа рассматривая акт проверки и материалы налоговой проверки, выносит одно из решений:</p>
                                <ul className="ul-punt">
                                    <li>
                                    решение о привлечении к ответственности за совершение налогового правонарушения;
                                    </li>
                                    <li>
                                    решение об отказе в привлечении к ответственности за совершение налогового правонарушения.
                                    </li>
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

export default Lect3;