#! zx

$.verbose = false;

const DELAY = 10 * 1000;
const MAX_JOB = 5;
let currentJob = 0;

async function main() {
  run();
  setInterval(() => {
    if (currentJob < MAX_JOB) {
      run();
    }
  }, DELAY);
}

async function run() {
  currentJob++;
  try {
    await $`pnpm start`;
  } catch (err) {
    console.log("err", err);
  }
  currentJob--;
}

main();
