module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.ts',
      'views/**',
      '!src/**/*.test.ts'
    ],
    tests: [
      'src/**/*.test.ts'
    ],
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest'
  }
}
