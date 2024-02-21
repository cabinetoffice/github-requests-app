import { descriptionValidation } from './fields/description.validation';
import { githubHandleValidation } from './fields/github-handle.validation';
import { teamNameValidation } from './fields/team-name.validation';

export const addTeam = [
    ...teamNameValidation, githubHandleValidation, ...descriptionValidation
];
