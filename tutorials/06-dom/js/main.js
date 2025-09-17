
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


/////NOTE TO RUHI- made it thru slides 1-15 of 05DOM tut, need to do 17-26