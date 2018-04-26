import React from 'react';
import { Link } from 'react-router';


class Home extends React.Component {
    render() {
        return (
            <div>
                Welcome to Home
                <br/>
                <Link to='about'>Go to About Page</Link>

                </div>
        );
    }
}
export default Home;