import React from 'react';
import pig from './../../../img/pig1.gif'

const Pig = () => {
    return (
        <div className='pig'>
            <img 
            style={{position: 'fixed', bottom: '0', right:0, width: '200px'}} 
            src={pig} />
        </div>
    );
};

export default Pig;