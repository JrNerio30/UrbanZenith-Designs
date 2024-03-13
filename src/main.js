const changeImagebtn = document.getElementById("change-image");
const backgroundImg = document.querySelector(".hero");
const imageUrls = [
  "./assets/herosecondchair.jpg",
  "./assets/brownfurniture.jpg",
  "./assets/herochair.jpg"
];
let currentIndex = 0;

changeImagebtn.addEventListener("click", () => {

  backgroundImg.style.background = `url(${imageUrls[currentIndex]}) center/cover no-repeat`

  currentIndex++;

  if(currentIndex >= imageUrls.length){
    currentIndex = 0;
  }
});