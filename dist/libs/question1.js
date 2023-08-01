const clickEvent = new Event("click");

function handleQuestion1() {
  const question = document.querySelector(".section1.topindex1");
  const rightOptions = question.querySelectorAll(".option[data-a='1']");
  rightOptions.forEach((option) => {
    if (option.style.display == "block") return;
    option.dispatchEvent(clickEvent);
  });

  const button = question.querySelector(".button");
  button.dispatchEvent(clickEvent);

  const button1 = question.querySelector(".continue");
  button1.dispatchEvent(clickEvent);
}

module.exports = { handleQuestion1 };
