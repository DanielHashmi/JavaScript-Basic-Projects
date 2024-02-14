let personAge = 65;

if (personAge <= 2) {
    console.log('That person is a Baby.')
} else if (personAge >= 2 && personAge < 4) {
    console.log('That person is a Toddler.')
} else if (personAge >= 4 && personAge < 13) {
    console.log('That person is a Kid.')
} else if (personAge >= 13 && personAge < 20) {
    console.log('That person is a Teenager.')
} else if (personAge >= 20 && personAge < 65) {
    console.log('That person is an Adult.')
} else if (personAge >= 65) {
    console.log('That person is an Elder.')
}