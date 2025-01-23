//1. Exercise Ganjil & Genap

const n1: number = 18;

if ( n1 % 2 === 0) {
    console.log("bilangan genap");
} else {
    console.log("bilangan ganjil");    
}

console.log(n1 % 2 === 0 ? "Bilangan genap" : "Bilangan ganjil");

//2. Exercise Bilangan Prima

const n2: number = 11;
let isPrime: boolean = n2 > 1 ? true : false;

for (let i = 2; i < n2; i++) {
    if (n2 % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime ? "Bilangan prima" : "Bukan bilangan prima");

//3. Exercise Cari jumlah angka 1 ke N

const n3: number = 5;
let sum: number = 0;

for (let i = 1; i <= n3; i++) {
    console.log(i);
    console.log(sum);    
    sum += i;
    console.log(sum);
    
}

console.log(sum);

//4. Exercise

//const n4: number = 4;
//let fact: number = 0;

//for (let i = 4; i <= n4; i--);