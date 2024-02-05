jest.mock('../../../src/middleware/logger.middleware');
jest.mock('../../../src/middleware/authentication.middleware');

import { jest, beforeEach, describe, expect, test } from '@jest/globals';
import { Request, Response, NextFunction } from 'express';
import request from 'supertest';

import app from '../../../src/app';
import * as config from '../../../src/config';
import { logger } from '../../../src/middleware/logger.middleware';
import { log } from '../../../src/utils/logger';
import { authentication } from '../../../src/middleware/authentication.middleware';

import { MOCK_REDIRECT_MESSSAGE, MOCK_GET_REMOVE_MEMBER_RESPONSE, MOCK_POST_REMOVE_MEMBER_RESPONSE } from '../../mock/text.mock';
import { MOCK_POST_REMOVE_MEMBER } from '../../mock/data';
import { ErrorMessages } from '../../../src/validation/error.messages';

jest.mock('../../../src/utils/logger', () => ({
    log: {
        info: jest.fn()
    }
}));

const mockedLogger = logger as jest.Mock<typeof logger>;
mockedLogger.mockImplementation((req: Request, res: Response, next: NextFunction) => next());
const mockedAuth = authentication as jest.Mock<typeof authentication>;
mockedAuth.mockImplementation((_req: Request, _res: Response, next: NextFunction) => next());

describe('Remove-member endpoint integration tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET tests', () => {
        test('renders the remove-member page', async () => {
            const res = await request(app).get(config.REMOVE_MEMBER_URL);

            expect(res.status).toEqual(200);
            expect(res.text).toContain(MOCK_GET_REMOVE_MEMBER_RESPONSE);
            expect(mockedLogger).toHaveBeenCalledTimes(1);
            expect(mockedAuth).toHaveBeenCalledTimes(1);
        });
    });

    describe('POST tests', () => {
        test('Should redirect to landing page after POST request', async () => {
            const res = await request(app).post(config.REMOVE_MEMBER_URL).send(MOCK_POST_REMOVE_MEMBER);

            expect(res.status).toEqual(302);
            expect(res.text).toContain(MOCK_REDIRECT_MESSSAGE);
            expect(mockedLogger).toHaveBeenCalledTimes(1);
            expect(mockedAuth).toHaveBeenCalledTimes(1);
        });

        test('Should render the same page with error messages after POST request', async () => {
            const res = await request(app).post(config.REMOVE_MEMBER_URL).send({
                github_handle: '',
                description: '1000chars.'.repeat(100) + ':)'
            });

            expect(res.text).toContain(ErrorMessages.GIT_HANDLE);
            expect(res.status).toEqual(200);
            expect(res.text).toContain(ErrorMessages.GIT_HANDLE);
            expect(res.text).toContain(ErrorMessages.DESCRIPTION_LENGTH);
            expect(mockedLogger).toHaveBeenCalledTimes(1);
            expect(mockedAuth).toHaveBeenCalledTimes(1);
        });

        test('Should log the GitHub Handle and More Details on POST request.', async () => {
            const res = await request(app).post(config.REMOVE_MEMBER_URL).send(MOCK_POST_REMOVE_MEMBER);

            const mockLog = log.info as jest.Mock;

            expect(mockLog).toBeCalledWith(MOCK_POST_REMOVE_MEMBER_RESPONSE);
            expect(res.text).toContain(MOCK_REDIRECT_MESSSAGE);
            expect(mockedLogger).toHaveBeenCalledTimes(1);
            expect(mockedAuth).toHaveBeenCalledTimes(1);
        });
    });
});