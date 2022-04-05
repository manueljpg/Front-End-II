function somandoArrays(array) {
    let total = array[0];
    for (let i = 1; i<array.length; i++) {
         console.log(`${total} + ${array[i]}`)
total+=array[i]
    }

}

somandoArrays([1,2,4,8]);

