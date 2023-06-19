import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Configuration file defining constants used throughout the application.
 */
export const Config = {
  /**
   * The number of items to return per page.
   */
  pageSize: 10,
  /**
   * The length of the generated password.
   */
  generatedPasswordLength: 32,
  /**
   * The length of the generated API key.
   */
  generatedApiKeyLength: 32,
  /**
   * JWT secret used to sign the JWT token.
   */
  jwtSecret: process.env.JWT_SECRET,
  /**
   * Redoc documentation username.
   */
  docUser: process.env.DOC_USER,
  /**
   * Redoc documentation password.
   */
  docPassword: process.env.DOC_PASSWORD,
  /**
   * Default did expiration time.
   */
  didExpirationTime: 60 * 60 * 24 * 365,
};
