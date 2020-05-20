import React from 'react';
import renderer from 'react-test-renderer';
import {checkIsValidResponse} from "../Requests";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('All Requests Tests', () => {

    it('invalidates invalid request', () => {
        var response = {"error_description": "Request is missing username parameter.", "error": "invalid_request"};
        var result = checkIsValidResponse(response);

        expect(result).toBe(false);


        response = {"error_description": "Request is missing password parameter.", "error": "invalid_request"};
        result = checkIsValidResponse(response);

        expect(result).toBe(false);


        response = {"error_description": "Invalid credentials given.", "error": "invalid_grant"};
        result = checkIsValidResponse(response);
        
        expect(result).toBe(false);

    });

    it('validates a valid response', () => {
        response = {"access_token": "qv4RFDR7fUQAf0XjpxJtPlDwsGZOJv", "expires_in": 86400, "refresh_token": "tAae31YDU85ZWFE9mBBme2mXe3aLHv", "token_type": "Bearer", "scope": "read groups write"};
        result = checkIsValidResponse(response);

        expect(result).toBe(true);
    });
});

