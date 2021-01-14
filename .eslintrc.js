module.exports = {
    env: {
        node: true,
        es6: true,
        'jest/globals': true
    },
    extends: [ 'eslint:recommended' ],
    plugins: [
        'jest'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        'linebreak-style': ['error', 'unix']
    }
};
