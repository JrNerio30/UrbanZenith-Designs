const changeImagebtn = document.getElementById("change-image");
const backgroundImg = document.querySelector(".hero");
const imageUrls = [
  "./assets/herosecondchair.jpg",
  "./assets/herochair.jpg",
  "./assets/brownfurniture.jpg",
];

let currentIndex = 0;

changeImagebtn.addEventListener("click", function(){

  backgroundImg.style.background = `url(${imageUrls[currentIndex]}) center/cover no-repeat fixed`

    currentIndex++;

    if(currentIndex >= imageUrls.length){
      currentIndex = 0;
    }
  }
);

window.addEventListener("resize", function(){
    if(window.innerWidth >= 1200){
      backgroundImg.style.backgroundAttachment = "fixed";
    }else{
      backgroundImg.style.backgroundAttachment = "scroll"
    }
  }
);

if(window.innerWidth >= 1200){
  backgroundImg.style.backgroundAttachment = "fixed";
}
else{
  backgroundImg.style.backgroundAttachment = "scroll";
}


const acc = document.getElementsByClassName("accvideo__container");
let i;

for(i = 0; i < acc.length; i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    } 
  );
}

const year = new Date().getFullYear();
const copyright =  `${year} ${"Urban Zenith Design"}`;

document.getElementById("copyRightYear").outerHTML = copyright;


