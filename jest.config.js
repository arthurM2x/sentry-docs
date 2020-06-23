module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": `<rootDir>/jest-transformer.js`,
  },
  testEnvironment: `jest-environment-jsdom-fourteen`,
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`, `/vendor/`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  "testURL": "https://docs.sentry.io"
};
