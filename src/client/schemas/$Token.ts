/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Token = {
    properties: {
        access_token: {
            type: 'string',
            isRequired: true,
        },
        token_type: {
            type: 'string',
            isRequired: true,
        },
    },
} as const;