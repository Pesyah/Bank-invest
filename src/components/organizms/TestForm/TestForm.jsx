import React, { useEffect, useState } from 'react';
import Lect1 from '../../molecules/Lections/1/Lect1';
import SelfWork1 from '../../molecules/SelfWorks/1/SelfWork1';
import Test1 from '../../molecules/Tests/1/Test1';
import './TestForm.css'

const TestForm = () => {
    const [testPage, setTestPage] = useState(3)
    const [lection, setLection] = useState('lection')
    const [independentWork, setIndependentWork] = useState('dis-none')
    const [test, setTest] = useState('dis-none')
    function next(){
        setTestPage(testPage + 1)
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
        <div className="tstlct"> 
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
                        <Lect1></Lect1>
                        <SelfWork1></SelfWork1>
                        <Test1></Test1>
                    <div className="test-lection-btn">
                        <button onClick={next}>Продолжить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestForm;