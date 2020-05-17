import React from 'react';
import renderer from 'react-test-renderer';
import LoggedInView from "../LoggedInView";

describe('All LoginView Tests', () => {

    it('renders correctly', () => {
        const tree = renderer.create(<LoggedInView/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});