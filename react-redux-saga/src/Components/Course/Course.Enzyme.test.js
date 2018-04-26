import expect from 'expect';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { Course } from './Course';

describe('Course components', () => {
    const props = {
        courses: []
        //actions: {return:{}}
    };
    it('For H1 tag', () => {
        const wrapper = shallow(<Course {...props} />);
        expect(wrapper.find('h1').text()).toEqual('Course Pages')
    });
    // it('for Submit', () => {
    //     const wrapper = mount(<Course {...props} />);
    //     const saveBtn = wrapper.find('input').last();
    //     expect(saveBtn.prop('type')).toBe('submit');
    //     saveBtn.simulate('click');
    //     expect(wrapper.state().errors.title).toBe('title must be 5 characters');
    // });
})


    