function make_sandwich(array) {
    console.log(`The sandwich is being orderd with the ingredients below \n`);
    array.forEach(item => {
        console.log(item + '\n')
    });
}
make_sandwich(['Bread', 'Tomoto', 'Cucumber', 'Katchup'])
make_sandwich(['Bread', 'Oil', 'Meat', 'Souse'])
make_sandwich(['Bread', 'Chicken', 'Garlic', 'Soup'])