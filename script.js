let current=0;
const slides=document.querySelectorAll(".slide");
const music=document.getElementById("bg-music");
let started=false;

function showSlide(i){
slides.forEach(s=>s.classList.remove("active"));
slides[i].classList.add("active");
}

function next(){
if(current<slides.length-1){
current++;
showSlide(current);
}
}

function prev(){
if(current>0){
current--;
showSlide(current);
}
}

document.addEventListener("click", (e)=>{
if(e.target.closest(".btn")) return;

if(current===0 && !started){
music.play().catch(()=>{});
started=true;
}

const x=e.clientX;
if(x>window.innerWidth/2){ next(); }
else{ prev(); }
});
