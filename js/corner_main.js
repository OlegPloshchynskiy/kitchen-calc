const corner_height = document.querySelector("#corner-height");
const corner_bottomHeight = document.querySelector("#corner-bottom-height");
const corner_fwidth = document.querySelector("#corner-first-width");
const corner_swidth = document.querySelector("#corner-second-width");
const corner_price = document.querySelector("#corner-price");
const submit = document.querySelector("#submit");
const corner_res = document.querySelector(".corner-result");

submit.onclick = function (e) {
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
    } м<sup>2</sup> </span>`;
    corner_res.innerHTML += `<span> Ціна: ${Math.ceil(corner_calcPrice)} грн. </span>`;
    
};