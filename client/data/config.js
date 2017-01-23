import Raven from 'raven-js';

const sentry_key = '39aa9d1e468346e18a2ad07bf7a8d9f5';
const sentry_app = '131839';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
