import { descriptionValidationNotOptional } from './fields/description-not-optional.validation';
import { teamNameValidation } from './fields/team-name.validation';

export const teamRequest = [
    ...teamNameValidation, ...descriptionValidationNotOptional
];
