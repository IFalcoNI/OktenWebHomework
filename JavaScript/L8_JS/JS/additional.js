// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let rules = document.getElementsByClassName("rules");
let arr = [];
let index = 0;
const req = () => {
  arr[index] = rules[index].classList.value;
  index++;
  if (index === rules.length) {
    return;
  }
  req();
};
req();
arr.forEach((element) => {
  console.log(element);
});
