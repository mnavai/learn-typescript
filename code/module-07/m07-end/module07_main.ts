/*  Module 7: Organize code in TypeScript
    Lab End */

//  Interfaces moved to module07_loans.ts

//  Functions moved to module07_loan-programs.ts

import * as LoanPrograms from './module07_loan-programs.js'; // imports all the functions from the modules

let loanA = LoanPrograms.interestOnlyLoan({principle: 30000, interestRate: 5});
let loanB = LoanPrograms.conventionalLoan({principle: 30000, interestRate: 5, numberOfMonths: 180});

console.log(loanA);     //* Returns "The interest only loan payment is 125.00" 
console.log(loanB);     //* Returns "The conventional loan payment is 237.24" 
