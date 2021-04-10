const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const spawn = require('cross-spawn');

const { askForLanguage, askForFrame } = require('./ask');
const { eslintrcConfig, needDeps } = require('./config');

module.exports = async () => {
  const language = await askForLanguage();
  const frame = await askForFrame();

  let type = language;
  if (frame) {
    type += `/${frame}`;
  }

  // 写 .eslintrc.js 文件
  fs.writeFileSync(
    path.join(process.cwd(), '.eslintrc.js'),
    `// Documentation\n// https://github.com/axuebin/eslint-config-axuebin\nmodule.exports = ${JSON.stringify(
      eslintrcConfig(type),
      null,
      2
    )}`
  );

  const deps = needDeps.javascript;
  if (language === 'typescript') {
    deps.concat(needDeps.typescript);
  }
  if (frame) {
    deps.concat(needDeps[frame]);
  }

  console.log();
  console.log(chalk.green(`使用配置：${type}`));
  console.log(chalk.green(`安装所需依赖：${deps.join(' + ')}`));
  console.log();
  try {
    spawn.sync('npm', ['install', ...deps, '--save-dev'], { stdio: 'inherit' });
  } catch {}
};
