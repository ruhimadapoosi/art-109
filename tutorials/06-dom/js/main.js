
console.log("hello hello");

let pageTitle = document.querySelector("#page-title");

// Javascript Timeout changes H1 title to pink after 3s
setTimeout ( function(){
    pageTitle.style.color = "pink";
    },3000) 


// Click event on header changes bg color 
    document.querySelector("header").onclick = function () {
        // console.log("clicked header");
        document.querySelector("body").style.backgroundColor = "black";
    }

//images disapearring
document.querySelector("#image-0").addEventListener("click", function() {
    document.querySelector("#image-0").style.display = "none";
    // alert("yippeee!");
})

document.querySelector("#image-1").addEventListener("click", 
    function() {
    document.querySelector("#image-2").style.visibility = "visible";
})