//Вивести числа від 1 до n використовуючи цикл for, n = 10
for (let i=1; i<11; i++) {
console.log(i)}
//цикл, який обчислює суму чисел від 1 до n, n=100
let sum=0
for (i=1; i<=100; i++){
    sum +=i
}
console.log(sum)
//цикл while, вивести числа від n до 1, n = 10
let a=11
do {
    a -= 1;
    console.log(a);
  } while (a > 1);
// or:
let b=10
while (b>0) {
    console.log(b)
    b-=1
}
//цикл, який виводить всі парні числа від 1 до n, n = 50
for (let i=1; i<=50; i++) {
    if(i%2===0) {
console.log(i)        
    }
}
//таблиця множення від 1 до n (вкладені цикли), n = 10 (тільки відповіді)
for (let i=1; i<=10; i++){
    for (let k=1; k<=10; k++) {
        console.log(i*k)
    }
}
//таблиця множення від 1 до n (вкладені цикли), n = 10 (з текстом)
for (let i=1; i<=10; i++){
    for (let k=1; k<=10; k++) {
        console.log(`${i} умножить на ${k} равно ${i*k}`)
    }
}
//факторіал числа n, n = 7, цикл
let mult = 1
for (let i=1; i<=7; i++) {
    mult = mult*i
}
console.log(mult)

//Виведіть перші n чисел послідовності Фібоначчі, n = 10
//1 1 2 3 5 8
function fibonachi (n) {
  if (n<=1) return 1;
else return fibonachi(n-1)+fibonachi(n-2);  
}
console.log(fibonachi(0))
console.log(fibonachi(1))
console.log(fibonachi(2))
console.log(fibonachi(3))
console.log(fibonachi(4))
console.log(fibonachi(5))
//Виведіть всі прості числа від 1 до n. (Дано: n = 100)
let n = 100;
for (let i = 1; i <= n; i++) {
    let flag = 1;
    if (i > 1 && i % 2 != 0)
    {
        for (let j = 3; j*j <= i ; j=j+2)
        {
            if (i%j==0)
            {
                flag=0;
                break;
            }
        }
    }
    else if (i != 2) flag = 0;
    if (flag==1) {console.log(i);}
}
//Створіть масив чисел від 1 до n, виведіть тільки ті, що діляться на 5 без остачі. (Дано: n = 100)
let allNumbers = [];
for (let i = 1; i<=100; i++){
    allNumbers.push(i);
  }
  console.log(allNumbers)

  for (let i = 1; i <= allNumbers.length; i++) {
    if(i%5==0) console.log(allNumbers[i])}

//Обчисліть суму чисел в масиві. масив = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
let Numbers = [];
for (let i = 1; i<=10; i++){
    Numbers.push(i);
  }
console.log(Numbers)
function Sum(Numbers){
let sum = 0;
for(let i = 0; i < Numbers.length; i++){
    sum += Numbers[i];
    }
console.log(sum);
}
Sum(Numbers)
