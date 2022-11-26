"use strict";
/*
first download module
first create variables*/
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firststr = (0, readline_sync_1.question)('Enter first number:\n');
    var operator = (0, readline_sync_1.question)('Enter operator:\n');
    var secondstr = (0, readline_sync_1.question)('Enter secound number:\n');
    var validinput = isNumber(firststr) && isOperator(operator) && isNumber(secondstr);
    //console.log(validinput);   
    if (validinput) {
        var firstnum = parseInt(firststr);
        var secnum = parseInt(secondstr);
        var result = calculate(firstnum, operator, secnum);
        console.log(result);
    }
    else {
        console.log('\n invalid input\n');
        main();
    }
}
function calculate(firstnum, operator, secnum) {
    switch (operator) {
        case '+':
            return firstnum + secnum;
        case '-':
            return firstnum - secnum;
        case '*':
            return firstnum * secnum;
        case '/':
            return firstnum / secnum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
