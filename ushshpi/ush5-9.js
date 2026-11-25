//ush5
function is_Blank(string){
    if (string.length === 0){
        return true
    }
    else{
        return false
}
}
console.log(is_Blank(''))
console.log(is_Blank('abc'))

//ush6
function string_to_array(string){
    return string.split(" ")
}
console.log(string_to_array("Jane Doe"))

//ush7
function truncate_string(string, number){
    return string.slice(0, number)
}
console.log(truncate_string("Robin Doe", 4))

//ush8
function capitalize_Words(string){
    let fjale = string.split(" ") //ndarja e fjaleve ne baze te hapsires
    let result = ""
    for(let i=0; i<fjale.length; i++){
        result += fjale[i].charAt(0).toUpperCase()+fjale[i].slice(1)+" "
    } return result.trim()
}
console.log(capitalize_Words('js string exercises'))

//ush9
function repeat(string, n=1){
    let result =""
    for(let i = 0; i<n; i++){
        result += string
    } return result
}
console.log(repeat('Ha!'))
console.log(repeat('Ha!', 2))
console.log(repeat('Ha!', 3))
