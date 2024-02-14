let magicians = ['Daniel', 'Aysha', 'Oz', 'KungFuPanda', 'HarryPotter', 'Dambaldore']

function show_magicians(array) {
    array.forEach(magician => {
        console.log(magician)
    });
}

function make_great(array) {
    let magicians = [];
    array.forEach((magician) => {
        magicians.push(magician.replace(magician, `The Great ${magician}`))
    })
    return magicians
}

let modifiedArr = make_great(magicians)

console.log(modifiedArr)
show_magicians(magicians)

