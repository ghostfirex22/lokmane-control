document.getElementById("btn-lg").addEventListener("mouseover",function(e){
    let lg_dev = document.getElementById("lg-btn-content")
    lg_dev.style.display === "none"
    lg_dev.style.display = "flex";

    document.getElementById("header").addEventListener("mouseleave",function(){
        lg_dev.style.display = "none";})
})

document.getElementById("btn-msg").addEventListener("mouseover",function(){
    let lg_dev = document.getElementById("msg-btn-content")
    lg_dev.style.display === "none"
    lg_dev.style.display = "flex";
    
    document.getElementById("header").addEventListener("mouseleave",function(){
        lg_dev.style.display = "none";})
    
})

document.getElementById("btn-rewards").addEventListener("mouseover",function(e){
    let lg_dev = document.getElementById("box-btn-content")
    lg_dev.style.display === "none"
    lg_dev.style.display = "flex";

    document.getElementById("header").addEventListener("mouseleave",function(){
        lg_dev.style.display = "none";})
})

document.getElementById("out").addEventListener("click",function(){
    window.close()
})

