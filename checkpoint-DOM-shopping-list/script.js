// const minus_btn = document.getElementsByClassName(".minus_btn");
// const plus_btn = document.getElementsByClassName(".plus_btn");
// const Quant = document.getElementsByClassName(".Quant");

// let n = 0;

// plus_btn.addEventListener("click", () => {
//   n++;
//   n = n < 10 ? "0" + n : n;
//   Quant.value = n;
//   console.log(n);
// });

// minus_btn.addEventListener("click", () => {
//   if (n > 0) {
//     n--;
//     n = n < 10 ? "0" + n : n;
//     Quant.value = n;
//     console.log(n);
//   }
// });
const min = document.querySelector(".min");
plus = document.querySelector(".plus");
num = document.querySelector(".num");
montant = document.querySelector(".montant");
const int = montant.value;

let n = 1;

plus.addEventListener("click", () => {
  n++;
  // n=(n<10)? '0' +n: n;
  num.value = n;
  console.log(n);
  if (n > 0) {
  }
  n > 1 ? (montant.value = n * int) : (montant.value = int);
});
min.addEventListener("click", () => {
  if (n > 0) {
    n--;
    // n = n < 10 ? "0" + n : n;
    num.value = n;
    console.log(n);
    n > 1 ? (montant.value = n * int) : (montant.value = int);
  }
});



const min1 = document.querySelector(".min1");
plus1 = document.querySelector(".plus1");
num1 = document.querySelector(".num1");
montant = document.querySelector(".montant");
const int = montant1.value;

let n = 1;

plus1.addEventListener("click", () => {
  n++;
  // n=(n<10)? '0' +n: n;
  num1.value = n;
  console.log(n);
  if (n > 0) {
  }
  n > 1 ? (montant1.value = n * int) : (montant1.value = int);
});
min1.addEventListener("click", () => {
  if (n > 0) {
    n--;
    // n = n < 10 ? "0" + n : n;
    num1.value = n;
    console.log(n);
    n > 1 ? (montant1.value = n * int) : (montant1.value = int);
  }
});
