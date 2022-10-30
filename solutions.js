// use strict
function isNum(x){
   return !isNaN(parseFloat(x))
}

function isBool (x){
    return (typeof x === "boolean");
}

function isString(x){
    return typeof x === 'string';
}

function isNeg(x){
    return isNum(x) && (x < 0);
}
function lowerCase(a){
   if(isString(a)){
    return a.toLowerCase();
   }

   return false;
}
function isAllLowerCase(a){
    if (isString(a)){
        return a.toLowerCase()=== a;
    }
    return false;
}
function isAllUpperCase(a){
    if (!isUndefined(a) && !isNull(a) && !isNull(a) && !isBool(a) && !isObject(a) && !isArray(a) && isString(a)){
        return a.toUpperCase() === a;
    }else {return false;}
}
function isNotPalindrome(a) {
    let arr = [];
   if (isString(a)){
    arr = a.split('');
    arr.reverse();
    arr = arr.join('');
    return (arr.toUpperCase() !== a.toUpperCase())

    
   }

   return true;
}

function multiplyBy2(a){
   if (isNum(a)){
    return a*2;
   }
   return false;
}

function convertHourToSec(a){
    if (isNum(a) && !isNeg(a)){
        return a*60*60;
       }
       return false;
}

function getLowestNumber(a, b, c){
   if (isNum(a) && isNum(b) && isNum(c)){
    return Math.min(a, b, c);
   }
   return false;
}
function addStringLengths(a, b){
    if (isString(a) && isString(b)){
        return a.length + b.length;
    }
    return false;
}

function subtract(a, b){
   if (isNum(a) && isNum(b)){
        return a-b;
   }
return false;
}
function calculateChange(t, c){
   if (isNum(t) && isNum(c)){
    t = parseFloat(t);
    c = parseFloat(c);
        return `$${parseFloat(t-c)}`;
   }
   return false;
}



