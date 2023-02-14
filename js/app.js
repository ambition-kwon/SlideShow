const container = document.querySelector(".container");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const imgarray = [
    "./img/pic-1.jpg",
    "./img/pic-2.jpg",
    "./img/pic-3.jpg",
    "./img/pic-4.jpg"];
let index = 0;
function leftSlide() {
    index = index-1 === -1 ? 3 : --index;
    container.style.backgroundImage = `url(${imgarray[index]})`;
}
function rightSlide() {
    index = index+1 === 4 ? 0 : ++index;
    container.style.backgroundImage = `url(${imgarray[index]})`;
}
setInterval(() => {
    rightSlide();
}, 6000);