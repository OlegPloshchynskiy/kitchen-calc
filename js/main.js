const height = document.querySelector("#height");
const bottomHeight = document.querySelector("#bottom-height");
const width = document.querySelector("#width");
const price = document.querySelector("#price");
const submit = document.querySelector("#submit");
const res = document.querySelector(".result");

const corner_height = document.querySelector("#corner-height");
const corner_bottomHeight = document.querySelector("#corner-bottom-height");
const corner_fwidth = document.querySelector("#corner-first-width");
const corner_swidth = document.querySelector("#corner-second-width");
const corner_price = document.querySelector("#corner-price");
const corner_submit = document.querySelector("#corner-submit");
const corner_res = document.querySelector(".corner-result");

let result = 0;
let calcPrice = 0;

let corner_result = 0;
let corner_calcPrice = 0;

// submit.onclick = function (e) {
//   e.preventDefault();
//   result =
//     +width.value * +bottomHeight.value +
//     (+height.value - 0.595 - +bottomHeight.value) * (+width.value - 0.6) +
//     (+height.value - +bottomHeight.value - 0.75) * 0.6;
//   calcPrice = result * +price.value;
//   console.log(result);
//   console.log(calcPrice);

//   res.innerHTML += `<span> Площа фасадів: ${
//     Math.round(result * 1000) / 1000
//   } </span>`;
//   res.innerHTML += `<span> Ціна: ${Math.ceil(calcPrice)} </span>`;
// };

corner_submit.onclick = function (e) {
  e.preventDefault();
  corner_result =
    (+corner_swidth.value + +corner_fwidth.value - 1.1) *
      +corner_bottomHeight.value +
    (+corner_swidth.value + +corner_fwidth.value - 1.2) *
      (+corner_height.value - +corner_bottomHeight.value - 0.595) +
    0.6 * (+corner_height.value - +corner_bottomHeight.value - 0.75);

  corner_calcPrice = corner_result * +corner_price.value;

  console.log(corner_result);
  corner_res.innerHTML += `<span> Площа фасадів: ${
    Math.round(corner_result * 1000) / 1000
  } </span>`;
  corner_res.innerHTML += `<span> Ціна: ${Math.ceil(corner_calcPrice)} </span>`;
  
};
