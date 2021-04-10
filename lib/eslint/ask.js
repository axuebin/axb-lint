const inquirer = require('inquirer');

async function askForFrame() {
  const { frame } = await inquirer.prompt([
    {
      type: 'list',
      name: 'frame',
      message: '请选择项目使用的框架：(React/Vue)',
      choices: [
        {
          name: 'React',
          value: 'react',
        },
        {
          name: 'Vue',
          value: 'vue',
        },
        {
          name: 'None',
          value: '',
        },
      ],
    },
  ]);

  return frame;
}
async function askForLanguage() {
  const { language } = await inquirer.prompt([
    {
      type: 'list',
      name: 'language',
      message: '请选择项目使用的语言：(JavaScript/TypeScript)',
      choices: [
        {
          name: 'JavaScript',
          value: 'javascript',
        },
        {
          name: 'TypeScript',
          value: 'typescript',
        },
      ],
    },
  ]);

  return language;
}

module.exports = {
  askForLanguage,
  askForFrame,
};
