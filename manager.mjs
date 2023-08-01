#! zx

$.verbose = false;

const DELAY = 10 * 1000;
const MAX_JOB = 5;
let currentJob = 0;

async function main() {
  run();
  let interval = setInterval(() => {
    if (currentJob < MAX_JOB) {
      run();
    } else {
      clearInterval(interval);
    }
  }, DELAY);
}

async function run() {
  currentJob += 1;
  try {
    await $`pnpm start`;
  } catch (err) {
    console.log("err", err);
  }
  setTimeout(() => {
    run();
  }, DELAY);
}

main();
