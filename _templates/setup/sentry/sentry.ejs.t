---
to: src/services/sentry.ts
unless_exists: true
---
import * as Sentry from '@sentry/react-native';
import {SENTRY_DSN} from '@constants';

function setupSentry() {
  Sentry.init({dsn: SENTRY_DSN});
}

const sentryEnabled = !!SENTRY_DSN && !__DEV__;

sentryEnabled && setupSentry();

export default sentryEnabled
  ? {
      captureException: Sentry.captureException,
      warn: (message: string) => Sentry.captureMessage(message, Sentry.Severity.Warning),
      error: (message: string) => Sentry.captureMessage(message, Sentry.Severity.Error),
      setUserContext: Sentry.setUser,
    }
  : {
      captureException: console.warn,
      warn: console.warn,
      error: console.warn,
      setUserContext: console.warn,
    };
