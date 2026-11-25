//ush10
function viti_aktual(){
    let viti = new Date().getFullYear()
    return viti
}
console.log(viti_aktual())

//ush11
function curday(ndares){
    let data = new Date()
    let day = data.getDate()
    let muaji = data.getMonth()
    let vit = data.getFullYear()
    return day + ndares +muaji +ndares+ vit
}
console.log(curday('/'))
console.log(curday('-'))

//ush12
function date_diff_indays(dt1, dt2){
    let d1 = new Date(dt1)
    let d2 = new Date(dt2)
    let diferenca = d2-d1

    return Math.round(diferenca/ (1000*60*60*24)) //js ben diferencen mes datave me milisek dhe ne e duam rez ne dit
}
console.log(date_diff_indays('04/02/2023', '11/04/2023'))
console.log(date_diff_indays('12/02/2023', '11/04/2023'))

//ush13
function add_minutes (date, min){
    date.setMinutes(date.getMinutes()+min)
    return date
}
console.log(add_minutes(new Date(2023, 5, 1), 30).toString())