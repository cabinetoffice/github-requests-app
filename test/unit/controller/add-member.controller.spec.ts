jest.mock('../../../src/utils/logger');

import { describe, expect, afterEach, test, jest } from '@jest/globals';
import { Request, Response } from 'express';

import { get, post } from '../../../src/controller/add-member.controller';
import * as config from '../../../src/config';
import { log } from '../../../src/utils/logger';

import { MOCK_POST_ADD_MEMBER } from '../../mock/data';
import { MOCK_POST_ADD_MEMBER_RESPONSE } from '../../mock/text.mock';

const req = {
    body: MOCK_POST_ADD_MEMBER
} as Request;

const mockResponse = () => {
    const res = {} as Response;
    res.render = jest.fn().mockReturnValue(res) as any;
    res.redirect = jest.fn().mockReturnValue(res) as any;
    return res;
};

describe('add member controller test suites', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    test('should render add member template', () => {
        const res = mockResponse();

        get(req, res);

        expect(res.render).toHaveBeenCalledWith(config.ADD_MEMBER);
    });
});

describe('add-member POST tests', () => {

    test('should redirect to landing-page on POST request', () => {
        const res = mockResponse();

        post(req, res);

        expect(res.redirect).toBeCalledWith(config.LANDING);
    });
    test('should log add-member details on POST request', () => {
        const res = mockResponse();

        const mockLogInfo = log.info as jest.Mock;

        post(req, res);

        expect(mockLogInfo).toHaveBeenCalledWith(MOCK_POST_ADD_MEMBER_RESPONSE);

    });
});
