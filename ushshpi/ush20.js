function validim(event){
    event.preventDefault()
    let emri = document.getElementById("emri").value
    let mbiemri = document.getElementById("mbiemri").value
    let email = document.getElementById("email").value
    let passw = document.getElementById("pass").value
    let conf = document.getElementById("confirm").value
    let termat = document.getElementById("termat").checked

    let rez = document.getElementById("rez")

    if(emri == "" || mbiemri =="" || email =="" || passw =="" || conf == ""){
        rez.textContent = ("ju lutemi, plotesoni te gjitha fushat!")
    } else if(passw.length < 8){
        rez.textContent = ("passwordi duhet te kete te pakten 8 karaktere!")
    } else if(passw !== conf){
        rez.textContent = ("password-et nuk perputhen!")
    } else if(termat == false){
        rez.textContent = ("duhet te pranoni termat dhe kushtet!")
    } else{
        rez.textContent = ("fushat u plotesuan me sukses!")
    }
}