function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}


let slides=document.querySelectorAll(".slide");
let index=0;
let autoSlide;

function showSlide(){

slides.forEach((slide)=>{
slide.style.display="none";
});

slides[index].style.display="block";

index++;

if(index>=slides.length){
index=0;
}

}

function startSlider(){
autoSlide=setInterval(showSlide,4000);
}

function stopSlider(){
clearInterval(autoSlide);
}

document.getElementById("slider").addEventListener("click",stopSlider);

showSlide();
startSlider();