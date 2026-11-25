const pi = 3.14

function vellimiForm(event){
    event.preventDefault()
    let radius = Number(document.getElementById("radius").value)
    document.getElementById("vol").value=4/3*pi*radius*radius*radius
}