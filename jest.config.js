export default {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    transformIgnorePatterns: ['<rootDir>/node_modules/']
  };