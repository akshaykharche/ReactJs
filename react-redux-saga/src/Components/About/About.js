import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
    render() {
        return (
            <div>
                Welcome to About Page
                <br />
                <Link to='/'>Go to Home Page</Link>
            </div>
        );
    }

}

export default About;