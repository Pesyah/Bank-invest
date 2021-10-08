import React, { useEffect, useState } from 'react';
import Test1 from '../../molecules/Tests/1/Test1';
import './TestForm.css'

const TestForm = (props) => {
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
        <div className="container-tl"> 
        {/* Основной блок (тот, что с градиентной рамкой) */}
            <div class='test-lection'>
                {/* Номер теста */}
                <p className='test-num'>Тест {props.number}:</p>
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
                        <div id={lection} className="test-lection-content-text">
                            {props.compon}
                        </div>
                    <div className="test-lection-btn">
                        <button>Продолжить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestForm;