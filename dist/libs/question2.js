const { waitElement } = require("./lib");

const clickEvent = new Event("click");

const SELECTOR_LIST = [
  ".section6.section.topindex1",
  ".section7.section.topindex1",
  ".section8.section.topindex1",
  ".section9.section.topindex1",
  ".section10.section.topindex1",
  ".section11.section.topindex1",
];

async function handleQuestion2() {
  for (let i = 0; i < SELECTOR_LIST.length; i++) {
    const selector = SELECTOR_LIST[i];
    await waitElement(selector);
    handleSubject(selector);
  }
}

function startQuestion2() {
  const startButton = document.querySelector(".section3.topindex2 .w0");
  startButton.dispatchEvent(clickEvent);
}

function handleSubject(selector) {
  const subject = document.querySelector(selector);
  const rightOptions = subject.querySelectorAll(".option[data-a='1']");
  rightOptions.forEach((option) => {
    if (option.style.display == "block") return;
    option.dispatchEvent(clickEvent);
  });

  const button = subject.querySelector(".button");
  button.dispatchEvent(clickEvent);
}

module.exports = {
  handleQuestion2,
  startQuestion2,
};
