let items = document.querySelectorAll(".q-item");

let itemArray = Array.from(items);

let sorted = itemArray.sort((a, b) => {
  const valueA = Number(a.querySelector(".votes").innerText.replace("票", ""));
  const valueB = Number(b.querySelector(".votes").innerText.replace("票", ""));
  return valueB - valueA;
});

let result = sorted.map((item, i) => {
  return {
    排名: i + 1,
    序号: item.querySelector(".number").innerText,
    投票: item.querySelector(".votes").innerText,
    项目: item.querySelector(".col").innerText,
  };
});

console.log(JSON.stringify(result));
