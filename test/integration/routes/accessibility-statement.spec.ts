jest.mock('../../../src/middleware/logger.middleware');
jest.mock('../../../src/middleware/authentication.middleware');
jest.mock('../../../src/utils/logger');

import { jest, beforeEach, describe, expect, test } from '@jest/globals';
import { Request, Response, NextFunction } from 'express';
import request from 'supertest';

import app from '../../../src/app';
import * as config from '../../../src/config';
import { logger } from '../../../src/middleware/logger.middleware';
import { authentication } from '../../../src/middleware/authentication.middleware';

import { MOCK_ACCESSIBILITY_STATEMENT_RESPONSE } from '../../mock/text.mock';

const mockedLogger = logger as jest.Mock<typeof logger>;
mockedLogger.mockImplementation((_req: Request, _res: Response, next: NextFunction) => next());

const mockedAuth = authentication as jest.Mock<typeof authentication>;
mockedAuth.mockImplementation((_req: Request, _res: Response, next: NextFunction) => next());

describe('Accessibility statement endpoint integration tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('GET tests', () => {
        test('should render the accessibility statement template', async () => {
            const res = await request(app).get(config.ACCESSIBILITY_STATEMENT_URL);

            expect(res.status).toEqual(200);

            expect(res.text).toContain(MOCK_ACCESSIBILITY_STATEMENT_RESPONSE);
            expect(mockedLogger).toHaveBeenCalledTimes(1);
            expect(mockedAuth).toHaveBeenCalledTimes(1);
        });
    });
});
