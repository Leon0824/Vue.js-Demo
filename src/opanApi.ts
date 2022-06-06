import { OpenAPI } from './client';
import type { Token } from './client';


const account: Token = JSON.parse( localStorage.getItem( 'account' ) );

if ( account && account.access_token ) {
    OpenAPI.TOKEN = account.access_token;
}

export { OpenAPI };
