async function waitElement(pattern) {
  let state = false;
  while (!state) {
    console.log("waitElement", pattern);
    const target = document.querySelector(pattern);
    await settimeoutPromise(500);
    if (target) state = true;
  }
}

function settimeoutPromise(time = 100) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

module.exports = {
  waitElement,
  settimeoutPromise,
};
