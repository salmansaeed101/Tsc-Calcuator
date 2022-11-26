
/* 
first download module 
first create variables*/


import {question} from 'readline-sync';

type Operator = '+'|'-'|'*'|'/';
function main():void
{
    const firststr:string =question('Enter first number:\n');
    const operator:string=question('Enter operator:\n');
    const secondstr:string=question('Enter secound number:\n');
    const validinput:boolean = isNumber(firststr) && isOperator(operator) && isNumber(secondstr);
    //console.log(validinput);   

    if(validinput)
    {
        const firstnum: number=parseInt(firststr);
        const secnum:number= parseInt(secondstr);
        const result= calculate(firstnum,operator as Operator,secnum);
        console.log(result);

    }
    else
    {
        console.log('\n invalid input\n')
        main()
    }
}
function calculate(firstnum:number,operator:Operator,secnum:number)

{
switch(operator)
{
        case '+':
        return firstnum + secnum;
        case'-':
        return firstnum - secnum;
        case '*':
        return firstnum * secnum;
        case '/':            
        return firstnum / secnum;

}
}
function isOperator(operator:string):boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
            default:
                return false;

    }
}
function isNumber(str: string): boolean
{
const maybeNum = parseInt(str);
const isNum: boolean =!isNaN(maybeNum);
return isNum;

}




main();