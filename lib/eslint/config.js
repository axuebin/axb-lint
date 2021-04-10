const path = require('path');

const configPkgName = 'eslint-config-axuebin';

/**
 * 导出 eslint-config-axuebin 的路径
 * like: extends: 'eslint-config-axuebin/typescript/vue'
 */
const configPkgPath = {
  javascript: '',
  'javascript/vue': 'vue',
  'javascript/react': 'react',
  typescript: 'typescript',
  'typescript/vue': 'typescript/vue',
  'typescript/react': 'typescript/react',
};

const needDeps = {
  javascript: ['eslint', 'babel-eslint', 'eslint-config-axuebin'],
  typescript: [
    'typescript',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
  ],
  react: ['eslint-plugin-react', 'eslint-plugin-react-hooks'],
  vue: ['eslint-plugin-vue', 'vue-eslint-parser'],
};

const eslintrcConfig = (type) => ({
  extends: path.join(configPkgName, configPkgPath[type]),
});

module.exports = {
  eslintrcConfig,
  needDeps,
};
