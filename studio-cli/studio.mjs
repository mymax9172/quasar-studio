#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk"; // Colors
import inquirer from "inquirer"; // Questions and forms, confirmations
import ora from "ora"; // Waiting, spinning chars
import figlet from "figlet"; // Char opening

import { init } from "./commands/init.mjs";

program.name("qstudio").version("1.0.0").description("Quasar Studio");

init(program);

console.log(
  chalk.yellow(
    figlet.textSync("Quasar Studio", { horizontalLayout: "standard" })
  )
);

program.parse(process.argv);
