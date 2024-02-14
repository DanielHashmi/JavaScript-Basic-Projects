let guest = ['Omar', 'Amir', 'Fatima'];

guest.push('Ali')
guest.unshift('Sarah')
putBetween(guest, 'Hasnain')

for (let i = 0; i < guest.length; i++) {
    console.log(`Sorry my dear friend ${guest[i]} i only have space for two people.\n`)
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

while (guest.length != 2) {
    let removedGuests = guest.pop()
    console.log(`Sorry i can't invite you my friend ${removedGuests}\n`)
}

console.log(`But ${guest[0]} you are still invited`)
console.log(`But ${guest[1]} you are still invited`)

guest = [];
console.log(guest)