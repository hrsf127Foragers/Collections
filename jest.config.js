// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: [
    "js",
    "jsx"
  ],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: "enzyme",
  testEnvironmentOptions: {
    'enzymeAdapter': 'react16'
  },
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  transform: {
    '^.+\\.jsx$': 'babel-jest'
  },
};
