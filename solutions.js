// Your solutions will go here :)
// use strict

function isString(a){
    return (typeof a === "string");
}
function isNum(a){
    return (!isNaN(a) && typeof a === 'number');
}
function isBool(a){
    return typeof a === "boolean";
}


function calculateChange(totalPaid, totalCost){

    if (typeof totalPaid === "boolean" || typeof totalCost === "boolean" && (totalCost === null)  || (totalPaid === null)
    && totalPaid === false && totalCost === false){
        return false;
    }else if (isNaN(totalPaid) || isNaN(totalCost)){
        return false;
    }
    return '$' + (parseFloat(totalPaid) - parseFloat(totalCost));
}

function subtract(a,b){
    if (!isNaN(a) && !isNaN(b) || a !== undefined || b !== undefined || a !== null || b !== null){
        if ( a !== false || b !== false){
            return parseInt(a) - parseInt(b);
        }

    }else {
        return false;
    }
}

function addStringLengths(a, b){


            return a.length + b.length;




}



function getLowestNumber(a,b,c){
    if (a !== undefined && a !== null && !isString(a) && !isBool(a) && !(a instanceof Array) && !(a instanceof Object)  && (
        (b !== undefined && b !== null && !isString(b) && !isBool(b) && !(b instanceof Array) && !(b instanceof Object)
    ))  && ((c !== undefined && c !== null && !isString(c) && !isBool(c) && !(c instanceof Array) && !(c instanceof Object)))
    ){

        return Math.min(a, b, c);

}else {return false;}

}


function convertHourToSec(a){


        return parseFloat(((a * 60) * 60).toString());


}

function multiplyBy2(a){
    if (a !== undefined && a !== null && !isString(a) && !isBool(a) && !(a instanceof Array) && !(a instanceof Object) ) {

        return a * 2;
    }else {return false;}
}

function isNotPalindrome(str){

    let newStr = str.join('').reverse().split();


 return str === newStr;
}

function isAllUpperCase(a){
    if (a !== undefined && a !== null && !isNum(a) && !isBool(a) && !(a instanceof Array) && !(a instanceof Object) ){
        return (a === a.toUpperCase());
    }else {return false;}




}

function isAllLowerCase(a){
    if (a !== undefined && a !== null && !isNum(a) && !isBool(a) && !(a instanceof Array) && !(a instanceof Object) ) {
        return (a === a.toLowerCase());
    }else {return false;}
}

function lowerCase(a){
    if (a !== undefined && a !== null && !isNum(a) && !isBool(a) && !(a instanceof Array) && !(a instanceof Object) ){
        return a.toLowerCase();
    }else{return false;}


}