jest.mock('../../../src/utils/logger');

import { describe, expect, afterEach, test, jest } from '@jest/globals';
import { Request, Response } from 'express';

import { get, post } from '../../../src/controller/team-request.controller';
import * as config from '../../../src/config';
import { log } from '../../../src/utils/logger';

import { MOCK_POST_TEAM_REQUEST } from '../../mock/data';
import { MOCK_POST_TEAM_REQUEST_RESPONSE } from '../../mock/text.mock';

const req = {
    body: MOCK_POST_TEAM_REQUEST
} as Request;

const mockResponse = () => {
    const res = {} as Response;
    res.render = jest.fn().mockReturnValue(res) as any;
    res.redirect = jest.fn().mockReturnValue(res) as any;
    return res;
};

describe('Team-request controller test suites', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('team-request GET tests', () => {

        test('should render team-request page', () => {
            const res = mockResponse();

            get(req, res);

            expect(res.render).toHaveBeenCalledWith(config.TEAM_REQUEST);
        });
    });

    describe('team-request POST tests', () => {

        test('should redirect to landing-page on POST request', () => {
            const res = mockResponse();

            post(req, res);

            expect(res.redirect).toBeCalledWith(config.LANDING);
        });
        test('Should log the team name and description on POST request.', () => {
            const res = mockResponse();

            const mockLogInfo = log.info as jest.Mock;

            post(req, res);

            expect(mockLogInfo).toHaveBeenCalledWith(MOCK_POST_TEAM_REQUEST_RESPONSE);

        });
    });
});
