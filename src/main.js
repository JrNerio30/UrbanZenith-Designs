const changeImagebtn = document.getElementById("change-image");
const backgroundImg = document.querySelector(".hero");
const imageUrls = [
  "./assets/herosecondchair.jpg",
  "./assets/herochair.jpg",
  "./assets/brownfurniture.jpg",
];
let currentIndex = 0;

changeImagebtn.addEventListener("click", () => {

  backgroundImg.style.background = `url(${imageUrls[currentIndex]}) center/cover no-repeat fixed`

    currentIndex++;

    if(currentIndex >= imageUrls.length){
      currentIndex = 0;
    }
  }
)


const acc = document.getElementsByClassName("content");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("mouseout", function() {
    this.classList.toggle("active");
    }
  )
}

