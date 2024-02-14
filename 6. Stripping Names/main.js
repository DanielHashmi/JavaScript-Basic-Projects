let myName = 'D\ta\nn\ti\ne\tl';

console.log(myName)

console.log('==============')

console.log(strip(myName))

function strip(text) {
    return text.replaceAll('\n', '').replaceAll('\t', '')
}