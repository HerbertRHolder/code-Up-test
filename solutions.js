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

    if (typeof totalPaid === "boolean" || typeof totalCost === "boolean"){
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

function addStringLengths(str1, str2){
    if ((str1 !== undefined) && (str2 !== undefined) || (typeof str1 !== "number") && (typeof str2 !== "number")){
        if ((typeof str2 !== "number") || (typeof str2 !== "number")){
            if (typeof str1 === "string" && typeof str2 === "string"){
                return str1.length + str2.length;
            }
        }

    }else {
       return false;

    }

}

function getLowestNumber(num1,num2,num3){
  return Math.min(num1,num2,num3);
}

function convertHourToSec(a){
    if (a !== undefined && a !== null && !isString(a) && !isBool(a) && !(a instanceof Array) && !(a instanceof Object) ) {

        return (a * 60) * 60;
    }else{return false;}
}

function multiplyBy2(a){
    if (a !== undefined && a !== null && !isString(a) && !isBool(a) && !(a instanceof Array) && !(a instanceof Object) ) {

        return a * 2;
    }else {return false;}
}

function isNotPalindrome(str){

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