console.log("test") //per te testuar lidhjen a e kemi bere si duhet
//variabla
const emriVariabli = "hello" //nk ndryshon qendron constante dhe emrat e var nk perseriten
var emriVar = "test" //global, kurse 'let' lokal
let emriLet = "variable" //nk lejohet te riperodresh te njejtin emer var brenda te njejtit bllok, kurse te 'var' mund ta perdoresh kudo
console.log(emriVariabli)
console.log(emriVar)
console.log(emriLet)
emriVar = "new value"
console.log(emriVar)
//tipet e te dhenave
//string
// let emriPerson = prompt("vendose emrin", "te nis me germe te madhe") 
// let mbiemriPerson = prompt("vendose mbiemrin", "te nis me germe te madhe") 
// console.log("pershendetje " + emriPerson + " " + mbiemriPerson + ", do ju kontaktojme se shpejti") //konkatenim(bashkim)
// console.log(`pershendetje ${emriPerson} ${mbiemriPerson}, do ju kontaktojme se shpejti`) //funksione bashkimi `` kto thonjzat
console.log("keisi".toUpperCase())
console.log("KeSi".toLowerCase())
console.log("kesi".charAt(0).toUpperCase()+"kesi".slice(1)) //indexi i germes qe nga duam te filloj e ti shkruaj
console.log(" keisi ".trim())
console.log("kesi".length)
console.log("hello\nworld")
console.log("hello \"world\"")
// numbers
let nr1 = 1 //int
let nr2 = 1.1 //float
let nr3 ="2" //string
 console.log(nr1 == nr3) //true, == krahason vtm vleren
 console.log(nr1 === nr3) //false se jane vlera te njejta por tipe te ndryshme, === krahason dhe vleren dhe tipin
 console.log(nr1 !== nr3) //true '!' ben te kunderten
 console.log(1 == true) //true se me nr binar vlera true shkruhet '1'
 console.log(1 === true) //false
// boolean(te dhena primitive)
// null, undefined
// let test = null
// let newtest;
//struktur t dhenash
//array
const array1= [1, "test", 23, [11, "shkolle"]] //lejon ndryshimin e elementeve qe ka brenda
let array2 = new Array(2, "true")
console.log(array1)
console.log(array1[1]) //menyre aksesimi info
console.log(array1[3][1])
array1[0]= 11
console.log(array1)

// object
object1 = {
    emri: "ana",
    mbiemer: "doe",
    mosha: 20,
    libri: {
        titulli: "titull",
        autori: "autori"
    },
    trajnimet: ["web", "java"]
}
let object2 = new Object()
object2.marka = "dell" //menyre aksesimi info
object2.sistemi = "windows 11"
console.log(object1 ["mbiemer"])
console.log(object1.libri.autori)
console.log(object1.trajnimet[0])
object1.mosha = 40
console.log(object1)

//if
let nr_1=4
let nr_2=5
if(nr_1 > nr_2){
    console.log(`${nr_1} me i madh se ${nr_2}`)
}
else if(nr_1===nr_2){
    console.log(`${nr_1} i barabarte me ${nr_2}`)
}
else{
    console.log(`${nr_1} me i vogel se ${nr_2}`)
}
//ternary operator
console.log((nr_1 > nr_2) ? (`${nr_1} me i madh se ${nr_2}`): (`${nr_1} me i vogel se ${nr_2}`))

let sport = "tenis"
switch(sport.toLowerCase){
    case "football":
        console.log("football zhvillohet diten e hene")
        break
    case "tenis":
        console.log("tenis zhvillohet diten e marte")
        break
    default:
        console.log("ky sport nk zhvilohte ne qendren tone")
}

//ciklet
//while, do-while, for
//for in(focus te objektet), for of, for each, map e ka focusin te array
console.log("while")
let nr=1
while(nr<=10){
    console.log(nr)
    nr++
}

do{
console.log(nr)
    nr++
} while(nr<=10)

console.log("for")
for(let nr=1; nr<=10; nr++){
    console.log(nr)
}
for(let nr=1; nr<=10; nr++){
    console.log(nr)
    if(nr==5){
        break
    }
}
let array = [2, "tel", 55, true, "test"]
let infos = ""
for(let i=0; i<array.length-1; i++){
    infos = infos + "<li>" + array[i] + "</li>"
}
document.getElementById("lista").innerHTML = infos

let person ={
    emri: "anna",
    mbiemri: "doe"
}
for(let i in person){
    console.log(person[i])
}

//funksion
function emriFunksion(){

}
emriFunksion()

const testFunksion = () =>{
}
function shuma(nr1, nr2){
    let shuma = nr1+nr2
    // console.log(shuma)
    return shuma
}
console.log(shuma(11, 22))

function shumaForm(event){
    event.preventDefault()
    let nr1 = Number(document.getElementById("nr1").value)
    let nr2 = Number(document.getElementById("nr2").value)
    document.getElementById("result").textContent = nr1+nr2
}
function ndryshonCSS(){
    let titull = document.getElementById("ndryshoStil")
    if(titull.style.color === "rgb(0, 0, 0)"){
        titull.style.color = "#f70000"
    titull.style.fontSize = "50px"
    } else{
    titull.style.color = "#000000"
    titull.style.fontSize = "30px"
}
}

//ush2
function krahasimForm(event){
    event.preventDefault()
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let rez = document.getElementById("rez")
    if(n1 === n2){
        rez.textContent="numrat jane te barabarte"
    }
    else if(n1>n2){
        rez.textContent="numri " + n1 + " eshte me i madh se "+ n2
    }
    else{
        rez.textContent="numri " + n1 + " eshte me i vogel se "+ n2
    }
}

//ndryshimi me klasa
// function hideShow(){
//     let lista = document.getElementById("listat")
//     console.log(lista)
//     console.log(lista.classList)
//     //lista.classList.remove("listatClass")
//     //lista.classList.add("listatClass")
//     lista.classList.toggle("listatClass") //nqs nk esht te shtoj, nqs eshte te heqi elementet
// }

let lista = document.getElementById("listat")
let buttonToggle = document.getElementById("buttonToggle")
buttonToggle.addEventListener("click", () =>{
    lista.classList.toggle("listatClass")
})

console.log("-----------")
function validate(event){
    event.preventDefault()
    let emri = document.querySelector("#emer").value
    console.log(emri)
    let mbiemri = document.getElementById("mbiemer").value
    let infoRez = document.getElementById("infoRez")
    if(emri === "" || mbiemri === ""){
        infoRez.textContent = "fusha eshte boshe. plotsojeni"
        //innerhtml ben perkthimin ne html kurse textcontent vtm si string
    } else{
        infoRez.textContent = "faleminderit " + emri + " " + mbiemri
    }
}

console.log("------------")
document.getElementById("viti").textContent = new Date().getFullYear() //metoda nk do vendosim ne info se e merr vet infon, kurse me metoden set duhet ta vendosim vet
