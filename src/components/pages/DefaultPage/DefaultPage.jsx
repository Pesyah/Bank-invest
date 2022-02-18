import React, { useState } from 'react';
import Head from '../../molecules/head/Head.jsx';
import Footer from '../../molecules/Footer/Footer.jsx'
import './DefaultPage.css'
import Shop from '../Shop/Shop.jsx';
import Courses from '../../organizms/Courses/Courses.jsx'
import Course from '../../organizms/Course/Course.jsx'


const DefaultPage = (props) => {

    const [page, setPage] = useState(false)

    function view() {
        if(page == '1') {
            return <Shop/>
        } else if(page == '2') {
            return <><Courses onClick={() => setPage(3)}></Courses></>
        } else if (page == '3'){
            return <Course next={() => setPage(3)}></Course>
        }
        else if (!page) {
            return <h1>О проекте</h1>
        }
    }
    console.log(page)
    return (
        <>
            <Head
                name = {props.name}
                onClick={props.onClick}
                shop = {() => setPage(1)}
                courses = {() => setPage(2)}
                about = {() => setPage(false)}
            />
            {view()}
            <Footer/>
        </>
    );
};

export default DefaultPage;