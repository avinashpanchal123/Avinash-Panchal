const express = require("express");

const app = express();

function primes(){
    let res = [];
    for(let i = 2; i < 30; i++){
        let flag = true;
        for( let j = 2; j < i; j++){
            if( i % j === 0){
                flag = false
                break;
            }
        }
        if( flag == true){
            res.push(i)
        }
    }

 
    return (res)
}


let dp = [];
dp[0] = 0
dp[1] = 1;

function fibonacci(n){
    if( n == 0){
        return  dp[0] 
    }
    if( n == 1){
      
        return dp[1]
    }
    if( dp[n] == undefined){
        dp[n] = fibonacci(n-1)+fibonacci(n-2)
        return dp[n]
    }
    else{
        return dp[n]
    }
    
}


// let fib = fibonacci(8);
// console.log(dp)

// const Primes = primes()

// console.log(Primes)

function oddNums(){
    let output = [];
    for( let i = 1; i < 20; i++){
        if( i % 2 != 0){
            output.push(i)
        }
    }
    return (output)
}


function getRandom(n){
    let rand = []
   for (let i = 0; i < n; i++) {
    let num = Math.floor(Math.random() * 20) + 1;
    rand.push(num)
   }
   return(rand)
}




app.get("/primes", (req, res)=>{
    const Primes = primes()

    const output = {
        primes : Primes
    }

    res.send(output)

})

app.get("/fibo", (req, res)=>{
    let fib = fibonacci(8);

    let output = {
        fibs : dp
    }

    res.send(output)

})


app.get("/odd", (req, res)=>{
    let odds = oddNums()

    let output = {
        odds : odds
    }

    res.send(output)

})

app.get("/rand", (req, res)=>{
    let rand = getRandom(10)

    let output = {
        random : rand
    }

    res.send(output)

})


let output1 = fibonacci(8);
output1 = dp
let output2 = getRandom(10);
let output3 = primes()
let output4 = oddNums();



let final = output1.concat(output2.concat(output3.concat(output4)));
let  n = final.length;

function removeDuplicates(arr , n) {
    let obj = {}
    for (let i = 0; i < n; i++) {
     if( obj[arr[i]] == undefined){
         obj[arr[i]] = 1
     }
     else{
         obj[arr[i]]++
     }
    }

    let keys = Object.keys(obj).map(Number)

    return keys
    
    }

  removeDuplicates(final, n)

  app.get("/numbers", (req, res)=>{
    let nums  = removeDuplicates(final, n).sort((a, b)=>{
        return a-b
    })

    let output = {
        numbers : nums
    }

    res.send(output)
  })
  



app.get("/", (req, res)=>{
  res.send("hello I am ")
})


module.exports = app;
