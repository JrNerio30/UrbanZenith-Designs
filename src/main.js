const changeImagebtn = document.getElementById("change-image");
const backgroundImg = document.querySelector(".hero");
const imageUrls = [
  "./assets/herosecondchair.jpg",
  "./assets/herochair.jpg",
  "./assets/brownfurniture.jpg",
];
let currentIndex = 0;

// HERO Background Image
changeImagebtn.addEventListener("click", () => {

  backgroundImg.style.background = `url(${imageUrls[currentIndex]}) center/cover no-repeat fixed`

    currentIndex++;

    if(currentIndex >= imageUrls.length){
      currentIndex = 0;
    }
  }
);
// Removes fixed propert for background attachment when the window inner width is less than 1200px
window.addEventListener("resize", () =>{
    if(window.innerWidth >= 1200){
      backgroundImg.style.backgroundAttachment = "fixed";
    }else{
      backgroundImg.style.backgroundAttachment = "scroll"
    }
  }
);

if(window.innerWidth >= 1200){
  backgroundImg.style.backgroundAttachment = "fixed";
}else{
  backgroundImg.style.backgroundAttachment = "scroll";
}

// Accordion Active Click Event
const acc = document.getElementsByClassName("accvideo__container");
let i;

for(i = 0; i < acc.length; i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    } 
  );
}

const year = new Date().getFullYear();
const by = "Urban Zenith Design";
const result = `${year} ${by}`

document.getElementById("copyRightYear").outerHTML = result;

