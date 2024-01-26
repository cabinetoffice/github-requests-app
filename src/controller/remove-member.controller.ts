import { Request, Response } from 'express';
import { log } from '../utils/logger';
import * as config from '../config';

export const get = (_req: Request, res: Response) => {
    return res.render(config.REMOVE_MEMBER);
};

export const post = (req: Request, res: Response) => {

    const gitHubHandle = req.body.gitHubHandle;
    const moreDetail = req.body.moreDetail;

    // validation middleware and data assignment to be implemented

    log.info(`Github Handle: ${gitHubHandle}, More Details: ${moreDetail}`);

    return res.redirect(config.LANDING);
};
