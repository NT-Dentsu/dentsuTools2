module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    ignorePatterns: ['.eslintrc.js', 'resources/js/bootstrap.js'],
    rules: {
        // importのときに以下の拡張子を記述しなくてもエラーにしない
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        // jsx構文を含むファイルの拡張子をjsxもしくはtsxに限定
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
    },
    settings: {
        // importするファイルをjsだけではなく、tsを含むファイルを許可する
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
