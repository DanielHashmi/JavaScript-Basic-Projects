function carInfo(manufacturer, model) {

    let array = Array.prototype.slice.call(arguments)

    let obj = {
        Manufacturer: manufacturer,
        Model: model
    }

    array.forEach(arr => {
        if (typeof arr === 'object') {
            Object.assign(obj, arr)
        }
    });

    return obj
}
console.log(carInfo('BMW', 'I8', { Color: 'Red', NumberPlate: 'ZKA-884' }))

// Did it after 11 hours of continuous code hope i understood the Exercises and the results are accurate. Thanks! Daniel Hashmi.