const container = document.querySelectorAll( ".containerslide");
Counter=0;
container.forEach (
    (containerslide,index)=> {
        containerslide.style.left=`${index*100}%` 
    }
);

