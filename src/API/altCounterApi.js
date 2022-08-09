export function fetchAltCount (amount = 1){
    return new Promise (resolve => setTimeout (()=> resolve ({data:amount}), 500))
}