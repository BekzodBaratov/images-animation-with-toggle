console.time("loop");

let images = new Array(...document.querySelectorAll(".images"));

for (let el of images) {
  el.addEventListener("click", function () {
    el.classList.toggle("img--1");
  });
}

console.timeEnd("loop");
