#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const cli = yargs(hideBin(process.argv));

cli.command(
  "sum <a> <b>",
  "Sum two number",
  {
    a: {
      type: "number",
      demandOption: true,
    },
    b: {
      type: "number",
      demandOption: true,
    },
  },
  (argv) => {
    console.log(`result: ${argv.a + argv.b}`);
  }
);
cli.command(
  "sub  <a> <b>",
  "Subtract two numbers",
  {
    a: {
      type: "number",
      demandOption: true,
    },
    b: {
      type: "number",
      demandOption: true,
    },
  },
  (argv) => {
    console.log(`result: ${argv.a - argv.b}`);
  }
);

cli.help("h").alias("h", "help").parse();
