import React from 'react';
import styles from './Buton.module.css'; // Import the CSS module

function Button(props) {
    const { icon, text } = props;

    return (
        <div className='mx-2 '>
            <button className={styles.button}> 
                {icon}
                {text}
            </button>
        </div>
    );
}

export default Button;
