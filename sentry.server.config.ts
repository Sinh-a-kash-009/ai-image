// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/



import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://03f1501849e9930789be2d3e6bb6fd5d@o4510601340977152.ingest.us.sentry.io/4511676072919040",

  tracesSampleRate: 1.0,
  enableLogs:true,
  sendDefaultPii:true,

  dataCollection: {
    // Optional
    // genAI: {
    //   inputs: false,
    //   outputs: false,
    // },
  },
  integrations :[Sentry.vercelAIIntegration()],
});
