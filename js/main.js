const height = document.querySelector("#height");
const bottomHeight = document.querySelector("#bottom-height");
const width = document.querySelector("#width");
const price = document.querySelector("#price");
const submit = document.querySelector("#submit");
const res = document.querySelector(".result");



let result = 0;
let calcPrice = 0;

let corner_result = 0;
let corner_calcPrice = 0;

submit.onclick = function (e) {
  e.preventDefault();
  result =
    +width.value * +bottomHeight.value +
    (+height.value - 0.595 - +bottomHeight.value) * (+width.value - 0.6) +
    (+height.value - +bottomHeight.value - 0.75) * 0.6;
  calcPrice = result * +price.value;
  console.log(result);
  console.log(calcPrice);

  res.innerHTML += `<span> Площа фасадів: ${
    Math.round(result * 1000) / 1000
  } м<sup>2</sup>  </span>`;
  res.innerHTML += `<span> Ціна: ${Math.ceil(calcPrice)} </span>`;
};


