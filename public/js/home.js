

let menu=document.querySelector(".menu i");

menu.addEventListener('click',()=>{

let sidebar=document.querySelector(".sidebar");

sidebar.style.display="flex";

})

let cross=document.querySelector(".menubar i");
cross.addEventListener('click',()=>{

    let sidebar=document.querySelector(".sidebar");
    
    sidebar.style.display="none";
    
    })