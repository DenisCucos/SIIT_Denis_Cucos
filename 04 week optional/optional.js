// EASY
// 1. Create a function that takes two numbers as arguments and returns their sum.
https://edabit.com/challenge/3LpBLgNRyaHMvNb4j

function sum(a, b) {
    return a + b;
}

// 2. Write a function that takes an integer minutes and converts it to seconds.
https://edabit.com/challenge/8q54MKnRrm89pSLmW

function convert(minutes) {
    return minutes * 60;
}

// 3. Create a function that takes a number as an argument, increments the number by +1 and returns the result.
https://edabit.com/challenge/NAQhEoxbofPidLxm9

function increments(number) {
    return number + 1;
}

// 4. Create a function that takes an array containing only numbers and return the first element.
https://edabit.com/challenge/QaApgtePE6QrCZ64o

function getFirstValue(arr) {
    return arr[0];
}

// 5.There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk

function divisionOperation(a, b) {
    return a % b;
}

// 6. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals.
https://edabit.com/challenge/8Qg78sf5SNDEANKti

function sumOfLegs(chickens, cows, pigs) {
    return chickens * 2 + cows * 4 + pigs * 4;
}

// 7. Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
https://edabit.com/challenge/iBQYbSHZGhpktLRdn

function divisibleByFive(n) {
    if (n % 5 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// 8. Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
https://edabit.com/challenge/yHGowWucg3k2kJdZ4

function comp(str1, str2) {
    if (str1.length == str2.length) {
        return true;
    }
    else {
        return false;
    }
}

// 9. Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
https://edabit.com/challenge/kLa2w7m4h849k8rmW

function sayHelloBye(name, num) {
    name = name[0].toUpperCase() + name.slice(1);
    if (num == 1) {
        return "Hello " + name;
    }
    else {
        return "Bye " + name;
    }
}

// MEDIUM
// 1. Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}

// 2. Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
https://edabit.com/challenge/Q3n42rEWanZSTmsJm

function minMax(arr) {
    var max = arr[0]
    var min = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        return [min, max];
    }
}

// 3. Create a function that takes a string and returns a string in which each character is repeated once.
https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

function doubleChar(str) {
    var doubleString = "";
    for (var i = 0; i < str.length; i++) {
        doubleString = doubleString + str[i] + str[i];
    }
    return doubleString;
}

// 4. A set is a collection of unique items. A set can be formed from an array by removing all duplicate items
https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd

function set(arr) {
    var uniqueItems = [];

    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (uniqueItems.indexOf(value) < 0) {
            uniqueItems.push(value);
        }
    }

    return uniqueItems;
}

// 5.