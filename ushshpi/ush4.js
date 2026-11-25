let studentet = [
    {emri: "David", piket: 80},
    {emri: "Jane", piket: 77},
    {emri: "Sara", piket: 88},
    {emri: "Ben", piket: 95},
    {emri: "Thomas", piket: 68}
]
let shuma = 0
for(let i = 0; i<studentet.length; i++){
    shuma+=studentet[i].piket
}

let mesatarja = shuma / studentet.length
console.log("mesatarja e pikeve: " + mesatarja)

function notaMes(piket){
    if(piket<60){
        return "F"
    } else if(piket<70){
        return "D"
    } else if(piket<80){
        return "C"
    } else if(piket<90){
        return "B"
    } else if(piket<100){
        return "A"
    }
}
for(let i =0; i<studentet.length; i++){
    let nota = notaMes(studentet[i].piket)
    console.log(studentet[i].emri + " "+ studentet[i].piket + "pike - nota: "+nota)
}
console.log("nota mesatare: ",notaMes(mesatarja))