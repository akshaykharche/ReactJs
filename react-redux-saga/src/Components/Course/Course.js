import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

export class Course extends Component {
    
    componentDidMount() {
        this.props.actions();
    }

    render() {
        return (
            <div>
                <h1>Pizza List</h1>
                <div>
                    {this.props.courses !== undefined && this.props.courses.map((value, index) => {
                        return <ul key={index}>
                            <li><b>{value}</b></li>
                        </ul>
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        courses: state.courses && state.courses.courses
    }
}

export default connect(mapStateToProps, {
    actions: courseActions.createCourse
})(Course);


