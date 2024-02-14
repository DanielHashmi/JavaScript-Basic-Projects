// Stripping Names

let myName = 'D\ta\nn\ti\ne\tl'; // Name Variable

console.log(myName) // Before

console.log('==============') // Line to Identify the difference

console.log(strip(myName)) // After

// Declaring a strip function in Javascript
function strip(text) {
    return text.replaceAll('\n', '').replaceAll('\t', '')
}