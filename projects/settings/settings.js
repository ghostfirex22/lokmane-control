let bg = 1;
document.querySelector(".form-check-input").addEventListener('click',()=>{
    let mode_color = document.querySelector("body")

    if (bg === 1){
        mode_color.style.backgroundColor = "white"
        mode_color.style.color = "#001"
        document.querySelector("h1").style.color = "black"
        document.querySelector(".menu").style.backgroundColor = "#717D7E "
        bg = 0
    }

    else if (bg === 0) {
        mode_color.style.backgroundColor = "#001"
        mode_color.style.color = "white"
        document.querySelector("h1").style.color = "white"
        document.querySelector(".menu").style.backgroundColor = "#123"
        bg = 1
    }
})

// document.querySelector(".form-informations").addEventListener('click',()=>{
//     let name = document.forms["form-inforamtions"]

//     if (name.length > 10) 

// })