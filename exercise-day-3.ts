//1
function multiplication(num: number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i}`)    
    }
}

multiplication(10);

//2
function palindrome(str: string) {
    console.log(str.split(""));
    console.log(str.split("").reverse().join(""));
    return str.split("").reverse().join("") === str ? "Palindrome" : "Bukan Palindrome";    
}

console.log(palindrome("madam"));

//3
function cmTokm(cm: number) {
    return cm / 100000 + " km";
}

console.log(cmTokm(100000));

//4

function convertCurrency(num: number) {
    return num.toLocaleString("id-ID", {
        currency: "IDR",
        style: "currency"
    })
}

console.log(convertCurrency(1000));

//5

function removeFirstOccured(str: string, search: string) {
    return str.replace(search, "");
}

console.log(removeFirstOccured("Hello World", "ell"));

//6

function capitalizeFirstChar(str: string) {
    let split: string[] = str.split(" ");
    console.log(split);

    for (let i = 0; i < split.length; i++) {
        console.log(split)
        split[i] = split[i][0].toUpperCase() + split[i].slice(1);
    }

    return split.join(" ");
}

console.log(capitalizeFirstChar("hello world"));

//7

function swapCapital(str: string) {
    let res: string = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            res += str[i].toLowerCase();
        } else {
            res += str[i].toUpperCase();
        }
    }
    return res;
}

console.log(swapCapital("tHe QuIck BROwn FoX"));

//8

function largest(num1: number, num2: number) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return "Angka Sama"
    }
}

console.log(largest(5, 2));

//9

function sort(num1: number, num2: number, num3: number) {
    if (num1 < num2 && num1 < num3) {
        if (num2 < num3) {
            return [num1, num2, num3]
        } else {
            return [num1, num3, num2]
        }
    } else {
        if (num1 < num2) {
            return [num3, num1, num2]
        } else {
            return [num3, num2, num1]
        }
    }
}

console.log(sort(1,12,10));

//10

function typeData(input: any) {
    if (typeof input === "string") {
        return 1
    } else if (typeof input === "number") {
        return 2
    } else {
        return 3
    }
}

console.log(typeData(5));

//11

function changeA(str: string) {
    let res: string = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "a") {
            res += "*";
        } else {
            res += str[i];
        }
    }
    return res;
}

console.log(changeA("An apple a day keep the doctor away"));