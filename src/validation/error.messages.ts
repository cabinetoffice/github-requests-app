export enum ErrorMessages {
  GIT_HANDLE = 'Enter a GitHub handle (aka GitHub username)',
  INVALID_GIT_HANDLE = 'GitHub handles may be a maximum length of 39 characters, only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen',
  DESCRIPTION_REQUIRED = 'Description is required',
  DESCRIPTION_LENGTH = 'Description must be 1000 characters or less',
  FIRST_NAME = 'Enter the first name of the GitHub account holder',
  LAST_NAME = 'Enter the last name of the GitHub account holder',
  EMAIL_ADDRESS_EMPTY = 'Enter the email address of the GitHub account holder',
  EMAIL_ADDRESS_INVALID = 'Enter a valid email address',
  CONTRACT_TYPE = 'Select the GitHub account holder’s contract type',
  CONTRACT_END_DATE= 'Enter the GitHub account holder’s contract end date in the correct format',
  CONTRACT_DATE_TIME= 'The contract end date cannot be in the past',
  REPO_NAME = 'Enter the repository name',
  VISIBILITY = 'Select a visibility option',
  TEAM_NAME = 'Enter the team name',
  CONTEXT = 'Select a context'
}
