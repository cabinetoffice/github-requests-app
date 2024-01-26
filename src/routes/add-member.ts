import { Router } from 'express';

import { get, post } from '../controller/add-member.controller';
import * as config from '../config';

const addMemberRouter = Router();

addMemberRouter.get(config.ADD_MEMBER_URL, get);
addMemberRouter.post(config.ADD_MEMBER_URL, post);

export default addMemberRouter;
