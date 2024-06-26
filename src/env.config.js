import 'dotenv/config';

/**
 * The port on which the application will listen for incoming requests.
 * @default 3000
 */
export const PORT = Number.parseInt(__env__('PORT', false, 3000), 10);

/**
 *
 * @param {string} name
 * @param {?boolean} [required]
 * @param {?string} [defaultValue]
 * @returns {string}
 */
function __env__(name, required, defaultValue) {
  const value = process.env[name];
  if (required && !value) {
    throw new Error(`Missing required .env key: '${name}'`);
  }
  if (!value) {
    return defaultValue || '';
  }
  return String(value);
}
