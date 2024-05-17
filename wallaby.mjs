
export default function (wallaby) {
  return {
    files: [
      'Sorts/**/*.mjs',    // Include all source files with .mjs extension
      '!Sorts/test/**/*.mjs'   // Exclude test files from the files list
    ],

    tests: [
      'Sorts/test/**/*.mjs'    // Include all test files
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'mocha',

  };
};
