var shoppingCart = {
    books: 3,
    sunglass: 2,
    pen: 25,
    mouse: 5,
    Keyboard: 2,
    mouse: 3

}

// set propety : 1
shoppingCart.books = 15;
console.log(shoppingCart);


// set propety : 2
shoppingCart['books'] = 29;
console.log(shoppingCart);


// set propety : 3
propertyName = 'books';
shoppingCart[propertyName] = 32;
console.log(shoppingCart);


// propertyName = 'mouse';
// propertyValues = shoppingCart[propertyName];
// console.log(propertyName, propertyValues);

// propertyName = 'mouse';
// propertyValues = shoppingCart[propertyName];
// console.log(propertyName, propertyValues);

// var penCount1 = shoppingCart.pen;
// console.log(penCount1);

// alternative :::

// var penCount2 = shoppingCart['pen'];
// console.log(penCount2);

// var properties = Object.keys(shoppingCart);
// console.log(properties);

// var propertiesValues = Object.values(shoppingCart);
// console.log(propertiesValues);



