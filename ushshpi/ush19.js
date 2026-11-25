function bmi(event){
    event.preventDefault()
    let pesha = Number(document.getElementById("pesha").value)
    let gjatesi = Number(document.getElementById("gjatesi").value)
    let rez = pesha / ((gjatesi/100)*(gjatesi/100)) //qe ta marri inputin ne m
    let rezultati = document.getElementById("rezultati")

    rezultati.textContent = "rezultati juaj "+ rez
}