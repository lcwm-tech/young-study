const changeEvent = new Event("change");
const clickEvent = new Event("click");

function chooseAddress() {
  const province = document.querySelector("#province");
  if (!province) return;
  const provinceOptions = province.querySelectorAll("option");
  const provinceArray = Array.from(provinceOptions);
  const targetProvince = provinceArray.find((option) => option.innerText.includes("云南"));
  if (!targetProvince) return;
  province.selectedIndex = Number(targetProvince.value);
  province?.dispatchEvent(changeEvent);

  const city = document.querySelector("#city");
  if (!city) return;
  const cityOptions = city.querySelectorAll("option");
  const cityArray = Array.from(cityOptions);
  const targetCity = cityArray.find((option) => option.innerText.includes("临沧"));
  if (!targetCity) return;
  city.selectedIndex = Number(targetCity.value);

  const button = document.querySelector(".section00 .sure");
  if (!button) return;
  button.dispatchEvent(clickEvent);
}

function startStudy() {
  const button = document.querySelector(".start_btn.on");
  if (!button) return;
  button.dispatchEvent(clickEvent);
}

module.exports = { chooseAddress, startStudy };
