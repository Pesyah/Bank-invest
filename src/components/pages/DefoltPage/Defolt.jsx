import React from 'react';
import Head from '../../molekules/head/Head.jsx';
import Footer from '../../molekules/Footer/Footer.jsx'
import Topic from '../../atoms/Topic/topic.jsx'
import './Defolt.css'
import TestForm from '../../organizms/TestForm/TestForm.jsx';

const Defolt = () => {
    return (
        <div>
        <Head proj="" test="" smartMoney="" courses="" studyMaterial="" reviews=""/>
        <TestForm></TestForm>
        <Footer/>
        </div>
    );
};

export default Defolt;