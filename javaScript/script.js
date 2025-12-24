let hambuger=document.getElementById("header-hamburger")
let links =document.getElementById("list")
hambuger.addEventListener('click',()=>{
    console.log("clicked")
    links.classList.toggle('active')
})