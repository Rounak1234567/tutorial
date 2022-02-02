document.querySelector("button").addEventListener("click", ()=>{
    var h1 = document.querySelector("h1");
    if(h1.innerText == "This is a tutorial"){
        h1.innerText = "On Github and Deployment";
        var btn = document.querySelector("button");
        btn.innerText = "Previous"
    }else{
        h1.innerText = "This is a tutorial";
        var btn = document.querySelector("button");
        btn.innerText = "Next"
    }
})