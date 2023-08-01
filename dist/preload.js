// const path = require("path");
const { ipcRenderer } = require("electron");
const { waitElement } = require("./libs/lib");
const { chooseAddress, startStudy } = require("./libs/prepare");
const { handleQuestion1 } = require("./libs/question1");
const { startQuestion2, handleQuestion2 } = require("./libs/question2");

localStorage.clear();

window.addEventListener("DOMContentLoaded", async () => {
  await waitElement("#province");
  chooseAddress();
  await waitElement(".start_btn.on");
  startStudy();
  await waitElement(".section1.topindex1");
  handleQuestion1();
  await waitElement(".section3.topindex2 .w0");
  startQuestion2();
  await waitElement(".section6.section.topindex1");
  await handleQuestion2();
  localStorage.clear();
  ipcRenderer.send("exit-app");
});
