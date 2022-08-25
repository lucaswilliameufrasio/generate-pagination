module.exports = {
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
}
