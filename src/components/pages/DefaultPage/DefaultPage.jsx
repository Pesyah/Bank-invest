import React, { useState } from 'react';
import Head from '../../molecules/head/Head.jsx';
import Footer from '../../molecules/Footer/Footer.jsx'
import './DefaultPage.css'
import Shop from '../Shop/Shop.jsx';
import Courses from '../../organizms/Courses/Courses.jsx'
import Course from '../../organizms/Course/Course.jsx'
import About from '../../molecules/About/About.jsx'


const DefaultPage = (props) => {

    const [page, setPage] = useState(false)

    function view() {
        if(page == '1') {
            return <Shop/>
        } else if(page == '2') {
            return <><Courses onClick={() => setPage(3)}></Courses></>
        } else if (page == '3'){
            return <Course goBack={() => setPage(2)} next={() => setPage(3)}></Course>
        }
        else if (!page) {
            return <About></About>
        }
    }
    return (
        <>
            <Head
                username = {props.username}
                onClick={props.onClick}
                shop = {() => setPage(1)}
                courses = {() => setPage(2)}
                about = {() => setPage(false)}
            />
            <div className="count">
                <p className="count-p"><div className="money"></div><span>На вашем счету {JSON.parse(localStorage.getItem('money')) || 0} монет</span></p>
            </div>
            {view()}
            <Footer/>
        </>
    );
};

export default DefaultPage;