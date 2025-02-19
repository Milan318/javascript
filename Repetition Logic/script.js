// prog-1 Print numbers 1 to 10 using for loop
// let str='';
// for(let i=1;i<=10;i++){
//     str += i+' , ';
// }
// console.log(str);

//prog-2 Print numbers 1 to 10 using while loop
// let str='';
// let i=1;
// while(i<=10){
//     str += i+' , ';
//     i++;
// }
// console.log(str);

//prog-3 Print numbers 1 to 10 using do-while loop
// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

//prog-4 Sum of first 10 natural numbers (for loop)
// let ans=0;
// for(i=1;i<=10;i++){
//     ans+=i;
// }
// console.log(`Answer:${ans}`);


//prog-5  Sum of first 10 natural numbers (while loop)
// let ans=0;
// let i=1;
// while(i<=10){
//     ans+=i;
//     i++;
// }
// console.log(`Answer:${ans}`);

//prog-6 Sum of first 10 natural numbers (do-while loop)
// let ans = 0;
// let i = 1;
// do {
//  ans += i;
//  i++;
// } while (i <= 10);
// console.log(`Answer:${ans}`);

//prog-7 Print even numbers from 1 to 20
// let str='';
// for(let i=2;i<=20;i+=2){
//     str+=i +',';
// }
// console.log(str);

//prog-8  Print odd numbers from 1 to 20
// let str='';
// for(let i=1;i<=20;i+=2){
//     str+=i +',';
// }
// console.log(str);

//prog-9 Print multiplication table of 5
// for(let i=1;i<=10;i++){
//     console.log("5*"+i + "=" + 5*i);
// }

//prog-10 Reverse countdown from 10 to 1
// let i=10;
// let str='';
// while(i>=1){
//     str += i+' , ';
//     i--; 
// }console.log(str);

//prog-11 Factorial of a number (for loop)
// let f=1;
// let number=5;
// for(let i=1;i<=number;i++){
//     f*=i;
// }
// console.log(`Factorial : ${f}`);

//prog-12 Find the sum of digits of a number
// let number = 3053, sum = 0;
// while (number>0) {
//  sum += number % 10;
//  number = Math.floor(number / 10);
// }
// console.log(`Sum of digits: ${sum}`);

//prog-13 Reverse a number
// let number = 3053, reverse = 0;
// while (number > 0) {
//  reverse = reverse * 10 + (number % 10);
//  number = Math.floor(number / 10);
// }
// console.log(`reversed number : ${reverse}`);

//prog-14 Check if a number is prime
// let num = 13; 
// isPrime = true;
// for (let i = 2; i <= Math.sqrt(num); i++) {
//  if (num % i === 0) {
//  isPrime = false;
//  break;
//  }
// }
// console.log(num, "is Prime:", isPrime);

//prog-15 fibbonaii seies
// let a=0,b=1,count=0;
// let n=5
// do{
//     console.log(a+" ");
//     let sum=a+b;
//     a=b;
//     b=sum;
//     count++;
    
// }while(count<n);

//prog-16 Find the largest digit in a number

// let num = 8375;
// let max=0;
// while (num > 0) {
//  let digit = num % 10;
//  if (digit > max) max = digit;
//  num =Math.floor (num / 10);
// }
// console.log("Largest digit:", max);

//prog-17  Calculate power of a number (a^b)

// let base = 4;
// let exponantial= 2;
// let answer = 1;

// for(let i=0;i<exponantial;i++){
//     answer = answer * base;
// }
// console.log(base + " raised to " + exponantial + " = "+ answer);

// prog-18  CHECK IF NUMBER IS ARMSTRONG NUMBER

// let num = 12;
// let sum = 0;
// let temp = num;

// while(temp>0){
//     let digit = temp % 10;
//     sum = sum + digit**3;
//     temp = Math.floor(temp/10);
// }
// console.log(num+" is armstrong"+ sum===num);

//prog-19 GCD

// let a = 12;
// let b = 6;

// while(b!==0){
//     let temp = b;
//     b = a % b;
//     a = temp;
// }

// console.log("GCD:"+ a);


// 20) LCM

// let a = 12;
// let b = 20;
// let lcm = (a*b)/gcd(a,b);

// function gcd(x,y){
//     while(y){
//         let temp = y;
//         y = x % y;
//         x = temp;
//     }
//     return x;
// }
// console.log(`LCM : ${lcm}`);