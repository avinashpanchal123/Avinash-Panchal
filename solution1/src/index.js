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
    console.log(res)

    let output = {
        primes: res
    }
    return (output)
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


let fib = fibonacci(8);
console.log(dp)

const Primes = primes()

console.log(Primes)


app.get("/primes", (req, res)=>{
    const Primes = primes()

    res.send(Primes)

})

app.get("/fib", (req, res)=>{
    let fib = fibonacci(8);

    let output = {
        fibs : dp
    }

    res.send(output)

})



app.get("/", (req, res)=>{
  res.send("hello I am ")
})


module.exports = app;
