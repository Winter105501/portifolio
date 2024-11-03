const checkbox = document.querySelector("#cor_fundo")

function darkmode(){
    const element = document.body   
    if(checkbox.checked){
        element.classList.add("dark")
        localStorage.setItem("dark-mode","true")
    }
    else{
        element.classList.remove("dark")
        localStorage.setItem("dark-mode","false")
    }
}

addEventListener("DOMContentLoaded", ()=>{
    const status = localStorage.getItem("dark-mode")
    if(status === "true"){
        checkbox.checked = true
    }
    else{
        checkbox.checked = false
    }
    darkmode()
}
)

checkbox.addEventListener("change", darkmode)