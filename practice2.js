




// 5) You are in a hurry to go to your school on time.But when you are crossing the road, the
// traffic signal is red coloured.In this situation, if you try to cross the road, you may be in
//     danger.If you notice a yellow coloured traffic signal, you should stop.If you notice a green
// coloured traffic signal, you should cross the road.So write a JS code, where there is a
// variable called signal.Its value can be green, yellow or red & we will get different activities as
//     // output depending on the variable.So, hurry up.

/* switch ('red') {
    case 'red':
        console.log('you may be in danger');
        break;
    case 'yellow':
        console.log('you should stop');
        break;
    case 'green':
        console.log('you should cross the road');
        break;
    default:
        console.log('hurry up');

} */





// 4) Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd.You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter



// ● No return + Has parameter:::::
function odd_even(num) {
    if (num % 2 == 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}
// odd_even(6);




// ● Has return + Has parameter:::::

function odd_even(num) {
    if (num % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
var result = odd_even(6);
console.log(result);