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





app.get("/primes", (req, res)=>{
    const Primes = primes()

    res.send(Primes)

})



app.get("/", (req, res)=>{
  res.send("hello I am ")
})


module.exports = app;
