let myName = 'daniel';

console.log(myName.toUpperCase())
console.log(myName.toLowerCase())
console.log(toTitleCase(myName))

function toTitleCase(text) {
    return text[0].toUpperCase().concat(text.slice(1, text.length))
}
