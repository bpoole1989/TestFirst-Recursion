// All of the recursive functions are pre-defined for you. Keep in mind, you need to determine
// their arguments! Keep in mind, there are a few test specs that require functions that are not solved
// recursively (you need to define those functions on your own).

/* eslint-disable no-unused-vars */

function factorialIterative(n) {
    let result = 1;

    while (n > 1) result *= n--;

    return result;
}

function factorial(n) {
    if (n <= 1)
        return 1;

    return n * factorial(n-1);
}

function sumTheDigits(array) {
    if (array.length === 0)
        return 0;

    return array[0] + sumTheDigits(array.slice(1));
}

function countTheVowels(string) {
    if (string === '')
        return 0;

    return 'aeiou'.includes(string[0].toLowerCase()) 
        + countTheVowels(string.slice(1));
}

function recSmallestInt(array) {
    if (array.length <= 1)
        return array[0];

    let smallestOfRest = recSmallestInt(array.slice(1));
    
    return array[0] < smallestOfRest ? array[0] : smallestOfRest;
    //Math.min(array[0], recSmallestInt(array.slice(1)))
}

function fib(n) {
    if (n === 0 || n === 1)
        return 1;

    return fib(n-1) + fib(n-2);
}

function type(variable) {
    return toString.call(variable).slice(8, -1);
}

function stringify(item) {
    switch (type(item)) {
        case 'Undefined':
            return 'undefined';

        case 'Null':
            return 'null';

        case 'Boolean':
            return item ? 'true' : 'false';

        case 'Number':
            return `${item}`;

        case 'String':
            return `"${item}"`;

        case 'Array':
            return `[${item.map(elem => stringify(elem)).join(',')}]`;

        case 'Object':
            let objectArray = [];    
            for (key in item) {objectArray.push(`"${key}":${stringify(item[key])}`)}
            return `{${objectArray.join(',')}}`;
            

        default:
            return;
    }
}

function search(func) {
    let matchFound = false;

    this.forEach(elem => {
        if (Array.isArray(elem))
            matchFound = (matchFound || search.call(elem, func));
        
        else if (func(elem)) 
            matchFound = true;   
    })

    return matchFound;
}

function recursiveMap(array, func) {
    // let newArray = [];

    // array.forEach(elem => {
    //     if (Array.isArray(elem))
    //         recursiveMap(elem, func)
    //             .forEach(subElem => {newArray.push(subElem)});
        
    //     else newArray.push(func(elem));
    // })

    // return newArray;

    if (array.length === 0) 
        return [];

    if (Array.isArray(array[0])) 
        return [...recursiveMap(array[0], func), ...recursiveMap(array.slice(1), func)];

    return [func(array[0]), ...recursiveMap(array.slice(1), func)];
}