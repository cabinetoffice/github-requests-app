import { body } from 'express-validator';

import { ErrorMessages } from '../error.messages';
import { validateGithubHandles } from './helper/github-handles.validation.helper';

export const githubHandleValidation = [
    body('github_handle').not().isEmpty({ ignore_whitespace: true }).withMessage(ErrorMessages.GIT_HANDLE).custom(validateGithubHandles),
];
