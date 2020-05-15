import React from 'react';
import renderer from 'react-test-renderer';
import LoginView from "../LoginView";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('All LoginView Tests', () => {

    it('renders correctly', () => {
        const tree = renderer.create(<LoginView/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('starts a login request', () => {
        var loginRequestMock = jest.fn((username, pass, onSuccess, onFail)=>{});
        const wrapper = shallow(<LoginView 
            loginRequest = {loginRequestMock}
        />);
        const instance = wrapper.instance();
        instance.onLoginRequest("user", "pass");

        expect(loginRequestMock.mock.calls.length).toBe(1);
    });

    it('handles a succesful request', () => {
        var handledSuccess = false;
        var handledFail = false;
        var successLoginRequestMock = jest.fn((username, pass, onSuccess, onFail)=>{onSuccess()});
        const wrapper = shallow(<LoginView 
            loginRequest = {successLoginRequestMock}
            onSuccess = {()=>handledSuccess=true}
            onFail = {()=>handledFail=true}
        />);
        const instance = wrapper.instance();

        instance.onLoginRequest("user", "pass");
        
        expect(handledSuccess).toBe(true);
        expect(handledFail).toBe(false);
    });

    it('handles a failed request', () => {
        // this is the 3rd time I repeat the same Arrange code. I need to find a way to reduce duplication.
        var handledSuccess = false;
        var handledFail = false;
        var failLoginRequestMock = jest.fn((username, pass, onSuccess, onFail)=>{onFail()});
        const wrapper = shallow(<LoginView 
            loginRequest = {failLoginRequestMock}
            onSuccess = {()=>handledSuccess=true}
            onFail = {()=>handledFail=true}
        />);
        const instance = wrapper.instance();

        instance.onLoginRequest("user", "pass");

        expect(handledFail).toBe(true);
        expect(handledSuccess).toBe(false);
    });
});