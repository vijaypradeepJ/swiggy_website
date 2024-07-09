var subcontainer=document.querySelector('.container');
const prev= document.getElementById('prev');
const next=document.getElementById('next');
var itemwidith=500;

var padding =10;
prev.addEventListener("click",() =>
    {
        subcontainer.scrollLeft-=itemwidith+padding;
    })
    next.addEventListener("click",() =>
    {
        subcontainer.scrollLeft+=itemwidith+padding;
    })

var prevs = document.getElementById('prevs');
var nexts =document.getElementById('nexts');
var container=document.querySelector('.container2');
var cards=container.querySelectorAll('.cards');

prevs.addEventListener('click',() => {
    container.scrollLeft-=itemwidith+padding;


});
 nexts.addEventListener("click" ,() =>
{
    container.scrollLeft+=itemwidith+padding;
});