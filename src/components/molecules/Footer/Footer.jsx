import React from 'react';
import './footer.css'

const footer = (props) => {
    return (
            <div className='footer'>
                <div onClick={props.onClick}>Ступени успеха</div>
            </div> 
    );
};

export default footer;
