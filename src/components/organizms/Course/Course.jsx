import React, { useState } from 'react';
import Lec1 from '../../molecules/Lec/1/Lec1.jsx'
import Lec2 from '../../molecules/Lec/1/Lec2.jsx'
import Lec3 from '../../molecules/Lec/1/Lec3.jsx'
import Self1 from '../../molecules/Self/1/SelfWork1.jsx'
import Self2 from '../../molecules/Self/1/SelfWork2.jsx'
import Self3 from '../../molecules/Self/1/SelfWork3.jsx'
import Test1 from '../../molecules/Tests/1/Test1.jsx'
import Test2 from '../../molecules/Tests/1/Test2.jsx'
import Test3 from '../../molecules/Tests/1/Test3.jsx'


const Course = (props) => {

    const [here, setHere] = useState(sessionStorage.getItem('here'))

    function where() {
        if (here == 'lec1'){
            return <Lec1 next={ () => setHere('self1')}></Lec1>
        }
        else if (here == 'lec2'){
            return <Lec2 next={ () => setHere('self2')}></Lec2>
        }
        else if (here == 'lec3'){
            return <Lec3 next={ () => setHere('self3')}></Lec3>
        }
        else if (here == 'self1'){
            return <Self1 next={ () => setHere('test1')}></Self1>
        }
        else if (here == 'self2'){
            return <Self2 next={ () => setHere('test2')}></Self2>
        }
        else if (here == 'self3'){
            return <Self3 next={ () => setHere('test3')}></Self3>
        }
        else if (here == 'test1'){
            return <Test1></Test1>
        }
        else if (here == 'test2'){
            return <Test2></Test2>
        }
        else if (here == 'test3'){
            return <Test3></Test3>
        }
    }


    return (
        <>{where()}</>
    );
};

export default Course;