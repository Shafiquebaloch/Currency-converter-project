#! /usr/bin/env node
import inquirer from "inquirer";
const Currencies: any={
    USD:1,
    Darham:3.75,
    Turkish_lira:32,
    Yuan:7.5,
    PKR: 278,
    Saudi_Riyal:3.5
}



let User_answer = await inquirer.prompt(
    [
        {
           name:"from_currency",
           message:"Enter Your Currency",
           type:"list",
           choices:["USD", "Darham", " Turkish lira", "Yuan", "PKR", "Saudi Riyal"]
       },
       {
           name:"To_currency", 
           message:"In which Currency do want to convert",
           type:"list",
           choices:[ "USD", "Darham", " Turkish lira", "Yuan", "PKR", "Saudi Riyal"]
       }, 
       { 
           name:"Amount",
           message:"Enter Your Amount",
           type:"input"
       }
   ]
)
//Perform currency conversion
let fromAmount=Currencies[User_answer.from_currency]
let toAmount=Currencies [User_answer.To_currency]
let Amounts= User_answer.Amount

//Using formula to convert currencies.
let baseCurrency= Amounts/fromAmount
let convertedAmount=baseCurrency*toAmount
console.log(`your converted Amount: ${convertedAmount}`);