// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/


import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://03f1501849e9930789be2d3e6bb6fd5d@o4510601340977152.ingest.us.sentry.io/4511676072919040",

  tracesSampleRate: 1.0,

  dataCollection: {
    // Optional
    // genAI: {
    //   inputs: false,
    //   outputs: false,
    // },
  },
});