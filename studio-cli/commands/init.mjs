import inquirer from "inquirer";
import * as fs from "fs/promises";

const confirmQuestion = [
  {
    type: "confirm",
    name: "confirm",
    message:
      "A framework directory already exists.\nPlease confirm you want to create a new one and delete the exiting one",
    default: false,
  },
];

export const init = (program) => {
  program
    .command("init")
    .description(
      "initialize the framework directory for a new Quasar Studio Application"
    )
    .action(async () => {
      // Check if the framework directory exists
      try {
        await fs.stat("./framework");

        const response = await inquirer.prompt(confirmQuestion);
        if (!response.confirm) return;

        // Remove the existing folder
        await fs.rm("./framework", { recursive: true });
      } catch (error) {}

      // Create the folder structure
      await fs.mkdir("./framework");
    });
};
