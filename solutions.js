// use strict
function isNum(x){
   return (isNaN(parseFloat(x)))
}

function isBool (x){
    return (typeof x === "boolean");
}
function isNull(x){
    return x === null;
}
function isString(x){
    return typeof x === 'string';
}
function isUndefined(x){
    return x === undefined;
}
function isNeg(x){
    return isNum(x) && (x < 0);
}
function isArray(x){
    return (x instanceof Array);
}
function isObject(x){
    return (x instanceof Object);
}
function lowerCase(a){
    if (!isUndefined(a) && !isNull(a) && !isNull(a) && !isBool(a) && !isObject(a) && !isArray(a) && isString(a))
    {
        return a.toLowerCase();
    }else {return false;}
}
function isAllLowerCase(a){
    if (!isUndefined(a) && !isNull(a) && !isNull(a) && !isBool(a) && !isObject(a) && !isArray(a) && isString(a)){
        return a.toLowerCase() === a;
    }else {return false;}

}
function isAllUpperCase(a){
    if (!isUndefined(a) && !isNull(a) && !isNull(a) && !isBool(a) && !isObject(a) && !isArray(a) && isString(a)){
        return a.toUpperCase() === a;
    }else {return false;}
}
function isNotPalindrome(a) {
    if (a[0] !== a.toUpperCase() && !isUndefined(a) && !isNull(a) && !isBool(a) && !isObject(a) && !isArray(a) && isString(a) && !isNum(a))
    {
        let arr = a.split('');
         arr = arr.reverse();
       return !(arr.join('') === a);

    }else {return true;}

}

function multiplyBy2(a){
    if (!isUndefined(a) && !isNull(a) && !isBool(a) && !isObject(a)
        && !isArray(a) && !isNaN(a)){
        return parseInt(`${a*2}`);
    }else {return false;}
}

function convertHourToSec(a){
    if (!isUndefined(a) && !isNull(a) && !isBool(a) && !isObject(a)
        && !isArray(a) && !isNaN(a) && !isNeg(a)){
        return (a*60)*60;
    }else {return false;}
}

function getLowestNumber(a, b, c){
    if (isArray(a) || isArray(b) || isArray(c))
    {
        return false;
    }else if (!isUndefined(a) && !isNull(a) && !isBool(a) && !isObject(a)
        && !isArray(a) && !isNaN(a) && isNum(a) === isNum(b) === isNum(c) || isNeg(a) || isNeg(b) || isNeg(c)){
        return Math.min(a, b, c);
    }else {return false;}
}
function addStringLengths(a, b){
    if (isUndefined(a) || isUndefined(b) || isNum(a) || isNum(b) || isNull(a) || isNull(b) || isBool(b)
        || isBool(a) || isObject(a) || isObject(b) || isArray(a) || isArray(b)){
        return false;
    }else {
        return a.length + b.length;
    }
}

function subtract(a, b){
    if (isUndefined(a) || isUndefined(b) || isNaN(a) || isNaN(b) || isNull(a) || isNull(b) || isBool(b)
        || isBool(a) || isObject(a) || isObject(b) || isArray(a) || isArray(b)){
        return false;
    }else{return a-b;}

}
function calculateChange(t, c){
    if (isUndefined(t) || isUndefined(c) || isNaN(t) || isNaN(c) || isNull(t) || isNull(c) || isBool(t)
        || isBool(c) || isObject(t) || isObject(c) || isArray(t) || isArray(c)){
        return false;
    }else{return "$" + parseFloat(`${t-c}`);}


}


