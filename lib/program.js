const commander = require('commander');
const chalk = require('chalk');
const packageJson = require('../package.json');

module.exports = async function () {
  const program = new commander.Command(packageJson.name).version(
    packageJson.version,
    '-v --version'
  );

  program
    .command('eslint')
    .description('Auto Config ESLint.')
    .action(() => {
      require('./eslint')();
    });

  program.on('--help', () => {
    console.log();
    console.log(
      `  Run ${chalk.cyan(
        `axblint <command> --help`
      )} for detailed usage of given command.`
    );
    console.log();
  });

  program.commands.forEach((c) => c.on('--help', () => console.log()));

  program.parse(process.argv);
};
