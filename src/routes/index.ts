import { Router } from 'express';

import { logger } from '../middleware/logger.middleware';

import homePageRouter from './home';
import healthcheckRouter from './healthcheck';
import confirmationRouter from './confirmation';
import addRepoRouter from './add-repo';
import addMemberRouter from './add-member';
import addTeamRouter from './add-team';
import removeMemberRouter from './remove-member';
import teamRequestRouter from './team-request';
import addTeamMemberRouter from './add-team-member';
import memberRequestRouter from './member-request';
import repoRequestRouter from './repo-request';

const router = Router();

// Mounting Logging middleware on all routes
router.use(logger);

// Routes
router.use(homePageRouter);
router.use(addMemberRouter);
router.use(confirmationRouter);
router.use(healthcheckRouter);
router.use(addRepoRouter);
router.use(addTeamRouter);
router.use(removeMemberRouter);
router.use(teamRequestRouter);
router.use(addTeamMemberRouter);
router.use(memberRequestRouter);
router.use(repoRequestRouter);

export default router;
