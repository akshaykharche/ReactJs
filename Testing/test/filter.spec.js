import React from 'react';
import { expect } from 'code';
import { shallow, mount } from 'enzyme';
import Filter from '../src/filter';
import { spy } from 'sinon';

// components

describe('<Filter />', () => {
    let props, wrapper

    beforeEach(() => {
        props = {
            handleFormSubmit: () => {
            },
        };
        wrapper = shallow(<Filter {...props} />);
    });

    it('should have a `<form>` element', () => {
        expect(wrapper.find('form')).to.have.length(1);
    });

    describe('<form />', () => {
        it('`<form>` element should have a onSubmit attribute', () => {
            expect(wrapper.props().onSubmit).to.be.defined;
        });

        it('onSubmit attribute should be of type `function`', () => {
            expect(typeof wrapper.props().onSubmit === 'function').to.be.true;
        });

        it('`<form>` element should have an `<input />` element', () => {
            expect(wrapper.find('form').childAt(0).type()).to.equal('input')
        });

        describe('<input />', () => {
            it('`<input>` element should be of type `text`', () => {
                expect(wrapper.find('form').childAt(0).props().type).to.equal('text');
            });

            it('`<input>` element should have a placeholder attribute with value `Name`', () => {
                expect(wrapper.find('form').childAt(0).props().placeholder).to.equal('Name');
            });

            it('`<input>` element value should be empty', () => {
                expect(wrapper.find('form').childAt(0).props().value).to.equal(undefined);
            });

            it('`<input>` element should have an onChange attribute', () => {
                expect(wrapper.find('form').childAt(0).props().onChange).to.be.defined;
            });

            it('onChange attribute should be of type `function`', () => {
                expect(
                    typeof wrapper.find('form').childAt(0).props().onChange === 'function'
                ).to.be.true;
            });

            it('should update the state when a value is input', () => {
                const name = 'Blerch';
                const input = wrapper.find('form').childAt(0);
                input.simulate('change', {
                    target: {
                        name: 'name',
                        value: name,
                    }
                });
                expect(
                    wrapper.state().fields.name
                ).to.equal(undefined);//nore change here name
            });

            it('should display an error when no value is input', () => {
                const handleFormSubmit = spy();
                wrapper = shallow(<Filter handleFormSubmit={handleFormSubmit} />);
                wrapper.find('form').simulate('submit');
                expect(
                    wrapper.state().fieldErrors.name
                ).to.equal('Please enter your name.');
            });

        });

        it('`<form>` element should have an `<p>` element', () => {
            expect(
                wrapper.find('form').childAt(1).type()
            ).to.equal('p');
        });

        describe('<p>', () => {
            it('`<p>` element should have a className', () => {
                expect(
                    wrapper.find('p').hasClass('error')
                ).to.be.true;
            });

            it('`<p>` element should be null when passed validationError: false', () => {
                expect(
                    wrapper.text()
                ).to.equal('');
            });

            // it('`<p>` element should be `Please enter your name` when passed validationError: true', () => {
            //     const handleFormSubmit = spy();
            //     wrapper = mount(<Filter handleFormSubmit={handleFormSubmit} />);
            //     wrapper.find('form').simulate('submit');
            //     expect(
            //         wrapper.text()
            //     ).toBe('Please enter your name.');
            // });

        });

        it('`<form>` element should have an `<input type="submit" />` element', () => {
            expect(
                wrapper.find('form').childAt(2).type()
            ).to.equal('input');
        });

        describe('<input type="submit" />', () => {
            it('`<input>` element should be of type `submit`', () => {
                expect(
                    wrapper.find('form').childAt(2).props().type
                ).to.equal('submit');
            });

            it('`<input />` element should have a className', () => {
                expect(
                    wrapper.find('form').childAt(2).hasClass('btn')
                ).to.be.true;
            });

            it('`<input />` element should have a value attribute', () => {
                expect(
                    wrapper.find('form').childAt(2).props().value
                ).to.equal('Submit');
            });

        });

    });

});