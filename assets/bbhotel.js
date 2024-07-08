var btn=document.querySelector(".dish-list")
       items=document.querySelectorAll(".dish-items");

btn.addEventListener("click",() => {
    btn.classList.toggle("open");
}) 
var mybtn=document.querySelector('.dishlist2');
    item=document.querySelectorAll('dish-items');

mybtn.addEventListener ( "click" , () => {
    mybtn.classList.toggle("open");


})
var prev=document.getElementById('prev');
var next=document.getElementById('next');
var deals=document.querySelector('.deals');
    deal=deals.querySelectorAll(".deal");
     
var itemwidith=200;
padding=2;

prev.addEventListener("click", () => {
    deals.scrollLeft-=itemwidith+padding;
})
next.addEventListener("click" ,() => {
    deals.scrollLeft+=itemwidith+padding;
})