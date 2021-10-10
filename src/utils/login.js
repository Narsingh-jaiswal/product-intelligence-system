import { getAccessToken } from './getAccessToken/getAccessToken';

export const isLogin = () => (getAccessToken() ? true : false);
