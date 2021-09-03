module.exports = {
  setupFiles: ["<rootDir>/.jest/register-context.ts"],
  testMatch: ["<rootDir>/src/*.test.ts"],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  },
};
