import React from 'react';
import Head from '../../molecules/head/Head.jsx';
import Footer from '../../molecules/Footer/Footer.jsx'
import Topic from '../../atoms/Topic/topic.jsx'
import './Defolt.css'
import TestForm from '../../organizms/TestForm/TestForm.jsx';

const Defolt = (props) => {
    return (
        <div>
        <Head/>

        <Topic/>

        <Footer/>
        </div>
    );
};

export default Defolt;