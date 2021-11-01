export enum API {
  BASE_URL = 'https://api.github.com',
  USER_AUTH_URL = '/user',
  SEARCH_QUERY_URL = '/search/users',
  GET_USERS_URL = '/users',
  FOLLOW_USER_URL = '/user/following',
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
export enum AUTH {
  username = 'arjun-bhatt-670',
  token = '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',
}
