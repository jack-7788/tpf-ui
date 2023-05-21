module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        '@vue/typescript/recommended',
    ],
    overrides: [],
    // parser: '@typescript-eslint/parser',
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multi-word-component-names': 'off',
        "@typescript-eslint/ban-types": "off"
    },
    globals: {
        defineProps: 'readonly',
        defineOptions: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
    },
}
