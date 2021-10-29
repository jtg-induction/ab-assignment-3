export enum API {
  USER_AUTH_URL = 'https://api.github.com/user',
  SEARCH_QUERY_URL = 'https://api.github.com/search/users',
  GET_USERS_URL = 'https://api.github.com/users',
  FOLLOW_USER_URL = 'https://api.github.com/user/following',
}
export enum RESPONSE_COUNT {
  MAX_SEARCH_RESPONSE_1 = 7,
  MAX_SEARCH_RESPONSE_2 = 30,
  MAX_SUGGESTIONS_RESPONSE = 4,
}
export enum RESPONSE_STATUS_CODES {
  NO_CONTENT = 204,
  SUCCESS = 200,
  NOT_FOUND = 404,
  UNAUTH = 401,
}
