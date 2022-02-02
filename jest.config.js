const nextJest = require('next/jest')

const createConfig = nextJest({
  dir: './',
})
const customConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createConfig(customConfig)
