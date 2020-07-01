import * as core from "@actions/core";

function run(): void {
  const days = core.getInput("daysFresh");
  console.log(days);
}

run();
