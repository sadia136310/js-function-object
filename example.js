/* function functionName(parameters) {
    function body
     return

 }
 var returnValue = functionName(parameters value) */
function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    var avg = total / 3;
    return avg;
}
var average = getAverage(59, 60, 56);
average = average.toFixed(2);
console.log('The average is ', average);