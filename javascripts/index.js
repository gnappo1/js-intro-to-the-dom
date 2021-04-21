let h1 = document.querySelector(".page-title")
let list = document.querySelector(".list")


document.addEventListener('DOMContentLoaded', function() {
    h1.addEventListener('click', function(event){
        event.target.style.backgroundColor = (event.target.style.backgroundColor === "purple") ? "transparent" : "purple"
    })
})