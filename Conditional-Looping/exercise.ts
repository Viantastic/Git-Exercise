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

//4. Exercise Faktorial

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  let num7 = 6;
  console.log(`Faktorial dari ${num7} adalah ${factorial(num7)}`);

  //5. Exercise Fibonacci

  function fibonacci(n) {
    let fib = [];
    let a = 0, b = 1;
  
    for (let i = 0; i < n; i++) {
      fib.push();
      let next = a + b;
      a = b;
      b = next;
    }
  
    return fib;
  }
  
  let N = 15;
  console.log(`The first ${N} Fibonacci numbers are:`, fibonacci(N));