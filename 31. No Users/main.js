let userNames = ['Admin', 'Daniel', 'Osman'];

for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'Admin') {
        console.log('Hello Admin, would you like to see the status report?')
    } else {
        console.log('Welcome ' + userNames[i])
    }
}
if (userNames.length == 0) {
    console.log('We need to find some users!')
}