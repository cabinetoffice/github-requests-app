import { Router } from 'express';

import { logger } from '../middleware/logger.middleware';

import landingPageRouter from './landing-page';
import healthcheckRouter from './healthcheck';
import confirmationRouter from './confirmation';
import addMemberRouter from './add-member';
import addTeamRouter from './add-team';
import removeMemberRouter from './remove-member';
import teamRequestRouter from './team-request';
import addTeamMemberRouter from './add-team-member';
import addRepoRequestRouter from './repo-request';

const router = Router();

// Mounting Logging middleware on all routes
router.use(logger);

// Routes
router.use(landingPageRouter);
router.use(addMemberRouter);
router.use(confirmationRouter);
router.use(healthcheckRouter);
router.use(addTeamRouter);
router.use(removeMemberRouter);
router.use(teamRequestRouter);
router.use(addTeamMemberRouter);
router.use(addRepoRequestRouter);

export default router;
