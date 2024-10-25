module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    // Handle module aliases (if you have custom `paths` in your `tsconfig.json`)
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    // Handle CSS imports (with CSS Modules)
    "\\.module\\.css$": "identity-obj-proxy",
    "\\.(scss|css|sass)$": "<rootDir>/__mocks__/styleMock.js",
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.jest.json",
    },
  },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
