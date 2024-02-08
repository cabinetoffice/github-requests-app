import { Router } from 'express';

import { authentication } from '../middleware/authentication.middleware';

import { get, post } from '../controller/add-repo.controller';
import * as config from '../config';

const addRepoRouter = Router();

addRepoRouter.get(config.ADD_REPO_URL, authentication, get);
addRepoRouter.post(config.ADD_REPO_URL, authentication, post);

export default addRepoRouter;
