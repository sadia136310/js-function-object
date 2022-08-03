//  ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা(multiplication table) আউটপুট হিসেবে দেখাবে।

/* function multiplicationTable(number) {
    for (i = 1; i <= 10; i++) {
        var result = i * number;
        console.log(result);
    }

}
var multiplicationResult = multiplicationTable(13);
console.log(multiplicationResult);
*/



// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

/* function anyName(name) {
    var convert = name.toLowerCase();
    return convert;

}
var lowercase = anyName('SADIA');
console.log(lowercase);

*/


// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

/* function fullName(a, b) {
    var myFullName = a + ' ' + b;
    return myFullName;
}
var isName = fullName('sadia', 'islam');
console.log(isName);
*/




// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  

/* function number(x) {
    var square = x * x;
    return square;
}
var isSquare = number(9);
console.log(isSquare);

*/



// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা:
// const pizza = {

//     toppings: ['cheese', 'sauce', 'pepperoni'],

//     crust: 'deep dish',

//     serves: 2

// }
// এবং pepperoni প্রিন্ট করবা।
const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    price: 600,
    serves: 2
}
const pizzaElement = pizza.toppings[2];
console.log(pizzaElement);
