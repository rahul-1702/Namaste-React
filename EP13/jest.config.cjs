/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { useESM: true }],
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    "^\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: "./tsconfig.json",
    },
  },
};
