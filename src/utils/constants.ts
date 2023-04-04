export const CART_KEY = 'pick-cart';
export const TOKEN = 'token';
export const AUTH_TOKEN_KEY = 'auth_token';
export const AUTH_PERMISSIONS = 'auth_permissions';
export const LIMIT = 10;
export const SUPER_ADMIN = 'super_admin';
export const CUSTOMER = 'customer';
export const CHECKOUT = 'pickbazar-checkout';
export const SHOPS_LIMIT = 20;
export const RTL_LANGUAGES: ReadonlyArray<string> = ['ar', 'he'];
export const PRODUCT_INITIAL_FETCH_LIMIT = 30;
export const DEFAULT_LANGUAGE = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE ?? 'en';

export function getDirection(language: string | undefined) {
  if (!language) {
    return 'ltr';
  }

  return RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
}

export const REFRESH_TOKEN_KEY = '@RefreshToken';
export const ACCESS_TOKEN_KEY = '@AccessToken';
export const ID_TOKEN_KEY = '@IdToken';
export const AUTH_USER_INFO_KEY = '@Auth0UserInfo';
export const FARM_DATA = '@farmData';

export const APP_NOT_READY = 'APP_NOT_READY';

export const GENDER_OPTIONS = [
  { label: 'Mashkull', value: 'M' },
  { label: 'Femer', value: 'F' },
];

export const IDENTIFICATION_OPTIONS = [
  { label: 'Identifikim i ri', value: 'I' },
  { label: 'Humbje matrikulli', value: 'F' },
];
