import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <React.Fragment>
            <div className='navbar'>
                <Link to="/" className='link'>HOME</Link>
                <ul className='nav-right'>
                    <li>
                        <Link to="/signup" className='link'>SIGNUP</Link>
                    </li>
                    <li>
                        <Link to="/login" className='link'>LOGIN</Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export default Navbar;