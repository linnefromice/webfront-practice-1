const nextJest = require('next/jest')

const createConfig = nextJest({
  dir: './',
})
const customConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createConfig(customConfig)
