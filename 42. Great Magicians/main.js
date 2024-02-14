let magicians = ['Daniel', 'Aysha', 'Oz', 'KungFuPanda', 'HarryPotter', 'Dambaldore']

function show_magicians(array) {
    array.forEach(magician => {
        console.log(magician)
    });
}

function make_great(array) {
    magicians = [];
    array.forEach((magician) => {
        magicians.push(magician.replace(magician, `The Great ${magician}`))
    })
    return magicians
}
make_great(magicians)
show_magicians(magicians)

