const chalk = require('chalk');

function displayMessage() {
  console.log(chalk.blue.bold('This is a colorful Node.js message!'));
}

module.exports = displayMessage;