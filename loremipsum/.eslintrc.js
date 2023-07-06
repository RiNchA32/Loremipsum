module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
        '@vue/typescript/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'space-before-function-paren': 'off',
        'no-useless-concat': 'off',
        'prefer-template': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-dynamic-require': 'off',
        'import/order': ['error', {groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type']}],
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'consistent-return': 'off',
        'default-case': 'off',
        'max-len': 'off',
        'no-plusplus': 'off',
        'arrow-parens': ['error', 'always'],
        'no-console': [
            'error', {
                allow: ['warn', 'error'],
            },
        ],
        camelcase: 'warn',
        curly: ['error', 'all'],
        indent: ['error', 4, {SwitchCase: 1}],
        quotes: ['error', 'single'],
        'no-underscore-dangle': ['error', {
            allow: ['_uid'],
            allowAfterThis: false,
            allowAfterSuper: false,
            enforceInMethodNames: true,
        }],
        'no-script-url': 'warn',
        'no-shadow': 'warn',
        'no-shadow-restricted-names': 'warn',
        'import/dynamic-import-chunkname': ['error', {
            importFunctions: ['dynamicImport'],
            webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
        }],
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            mjs: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            json: 'never',
        }],
        'vue/match-component-file-name': ['error', {
            extensions: ['vue'],
            shouldMatchCase: false,
        }],
        'vue/no-deprecated-v-on-native-modifier': 'error',
        'vue/require-v-for-key': 'warn',
        'vue/require-name-property': 'error',
        'vue/multi-word-component-names': 'warn',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/html-indent': ['error', 4],
        'vue/attribute-hyphenation': ['error', 'always'],
        'vue/require-explicit-emits': 'error',
        'vue/attributes-order': ['error', {
            order: [
                'DEFINITION',
                'LIST_RENDERING',
                'CONDITIONALS',
                'RENDER_MODIFIERS',
                'GLOBAL',
                'UNIQUE',
                'TWO_WAY_BINDING',
                'OTHER_DIRECTIVES',
                'EVENTS',
                'OTHER_ATTR',
                'CONTENT',
            ],
        }],
        'vue/html-self-closing': ['error', {
            html: {
                void: 'never',
                normal: 'never',
                component: 'always',
            },
            svg: 'always',
            math: 'always',
        }],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 1,
            multiline: 1,
        }],
        'object-curly-spacing': ['error', 'never'],
        'object-shorthand': ['error', 'always', {avoidQuotes: false}],
        'newline-after-var': ['error', 'always'],
        'newline-before-return': 'error',
        semi: 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/type-annotation-spacing': ['error', {
            before: false,
            after: true,
            overrides: {
                arrow: {
                    before: true,
                    after: true,
                },
            },
        }],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ExportDefaultDeclaration',
                message: 'дефолтный экспорт запрещен',
            },
            {
                selector: 'TSEnumDeclaration:not([const=true])',
                message: 'enum всегда с const',
            },

        ],
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
                'no-restricted-syntax': [
                    'error',
                    'ForInStatement',
                    'LabeledStatement',
                    'WithStatement',
                    'Literal[value="null"]',
                    {
                        selector: 'ExportDefaultDeclaration > :not(CallExpression[callee.name="defineComponent"])',
                        message: 'Declare a component with "defineComponent"',
                    },
                ],
            },
        },
        {
            files: ['*.ts', '*.d.ts'],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
            rules: {
                'no-shadow': 'off',
                'no-restricted-globals': [
                    'error',
                ],
                'import/no-unresolved': 'off',
                'no-useless-constructor': 'off',
                'no-empty-function': ['error', {allow: ['constructors']}],
                '@typescript-eslint/member-delimiter-style': [
                    'error',
                    {
                        singleline: {
                            delimiter: 'comma',
                            requireLast: false,
                        },
                        multiline: {
                            delimiter: 'none',
                        },
                    },
                ],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'variable',
                        modifiers: ['const'],
                        format: ['camelCase', 'UPPER_CASE'],
                    },
                    {
                        selector: ['classProperty'/* , 'typeProperty' */],
                        types: ['boolean'],
                        format: ['PascalCase'],
                        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
                    },
                    {
                        selector: 'variable',
                        types: ['boolean'],
                        format: ['PascalCase'],
                        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
                    },
                    {
                        selector: 'typeLike',
                        format: ['PascalCase'],
                    },
                    {
                        selector: 'interface',
                        format: ['StrictPascalCase'],
                        prefix: ['I'],
                        filter: {
                            regex: 'Window|DI',
                            match: false,
                        },
                    },
                    {
                        selector: 'enum',
                        format: ['StrictPascalCase'],
                        filter: {
                            regex: 'TKeys',
                            match: false,
                        },
                    },
                    {
                        selector: 'enumMember',
                        format: ['PascalCase'],
                        filter: {
                            regex: '^T_.+$|^[A-Z]{2}_[A-Z]{2}$',
                            match: false,
                        },
                    },
                ],
            },
        },
        {
            files: ['*.js'],
            rules: {
                'no-restricted-syntax': 'warn',
            },

        },
    ],

};
