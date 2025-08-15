export const APP_CONSTANTS = {
  SESSION_EXPIRY_DAYS: 7,
  STORAGE_KEYS: {
    AUTH: 'literaryAviaryAuth',
    AUTH_TIME: 'literaryAviaryAuthTime'
  },
  AUTH_STATUS: {
    AUTHENTICATED: 'authenticated'
  }
} as const;

export type AppMode = 'gallery' | 'admin' | 'login' | 'about';