import React, { useState } from 'react';
import Head from '../../molecules/head/Head.jsx';
import Footer from '../../molecules/Footer/Footer.jsx'
import './DefaultPage.css'
import Courses from '../../organizms/Courses/Courses.jsx'
import Course from '../../organizms/Course/Course.jsx'
import About from '../../molecules/About/About.jsx'
import Admin from '../Admin/Admin.jsx';
import Shop from '../Shop/Shop'


const DefaultPage = (props) => {

    const [page, setPage] = useState(false)

    function view() {
        if(page == '1') {
            return <Admin></Admin>
        } else if(page == '2') {
            return <><Courses onClick={() => setPage(3)}></Courses></>
        } else if (page == '3'){
            return <Course goBack={() => setPage(2)} next={() => setPage(3)}></Course>
        } else if(page == '4') {
            return <Shop/>
        }
        else if (!page) {
            return <About></About>
        }
    }
    return (
        <>
            <Head
                username = {localStorage.getItem('username')}
                onClick={props.onClick}
                shop={() => setPage(4)}
                courses = {() => setPage(2)}
                about = {() => setPage(false)}
            />
            {view()}
            <Footer onClick={() => setPage(1)}/>
        </>
    );
};

export default DefaultPage;