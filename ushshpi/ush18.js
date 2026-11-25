function ploteso(event){
    event.preventDefault()

    let emri = document.getElementById("emer").value
    let mbiemri = document.getElementById("mbiemer").value
    let text = document.getElementById("texti")

    text.textContent = "pershendetje, une jam " +emri +" "+mbiemri
}