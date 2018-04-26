import React from 'react';
import { Link, IndexLink } from 'react-router';

 const Headers = () => {
    return (
        <div>
            <IndexLink to='/'>Home</IndexLink>
            {' | '}
            <Link to='about'>About</Link>
            {' | '}
            <Link to='course'>Course</Link>
        </div>
    )
}
export default Headers;
