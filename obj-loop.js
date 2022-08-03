var shoppingCart = {
    books: 3,
    sunglass: 2,
    pen: 25,
    mouse: 5,
    Keyboard: 2,
    mouse: 3,
    shoes: 2

}
// const keys = Object.keys(shoppingCart);
// console.log(keys);
// const values = Object.values(shoppingCart);
// console.log(values);


// for loop :
// for (i = 0; i < keys.length; i++) {
//     var propertyName = (keys[i]);
//     var propertyValue = shoppingCart[propertyName];
//     console.log(propertyName, propertyValue)
// }


// for in loop ::::
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}
