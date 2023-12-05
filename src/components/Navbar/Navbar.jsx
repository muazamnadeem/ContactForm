import React from 'react'
import styles from './Navbar.module.css';
function Navbar() {
    return (
        <div>
            <div className={`container ${styles.navbar_list}`}>
                <div className="row align-items-center ">
                    <div className="col">
                        <div className="navbar_logo">
                            <img src=".\images\Frame 2 1.png" alt="" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="navbar_list">
                            <ul className='d-flex justify-content-end'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Navbar
