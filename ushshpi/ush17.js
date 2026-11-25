function ndryshim(){
    let text = document.getElementById("paragraf")
    if(text.style.color === "rgb(0, 0, 0)"){
        text.style.color = "rgb(251, 13, 199)"
        text.style.fontSize = "80px"
        text.style.fontStyle = "italic"
    } else{
        text.style.color = "rgb(0, 0, 0)"
        text.style.fontSize = "30px"
        text.style.fontStyle = "normal"
    }
}