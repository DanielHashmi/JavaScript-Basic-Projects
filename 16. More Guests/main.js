let guest = ['Omar', 'Amir', 'Fatima'];

guest.push('Ali')
guest.unshift('Sarah')
putBetween(guest,'Hasnain')

for (let i = 0; i < guest.length; i++) {
    console.log(`You are invited my friend ${guest[i]}. But! Osman Can't Come.\n`)
}

function putBetween(array, text) {
    guest = [];
    array.forEach((e) => {
        if (guest.length == Math.floor(array.length / 2)) {
            guest.push(text, array[Math.floor(array.length / 2)])
        } else {
            guest.push(e)
        }
    })
    return guest
}
