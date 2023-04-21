/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
interface Loan {
    principle: number;
    interestRate: number;
}

/*  TODO: Declare the ConventionalLoan interface. */
interface ConventionalLoan extends Loan {
    months: number;
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

// let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 23000, interestRate: 4});
// console.log(interestOnlyPayment);    

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(loanTerms: ConventionalLoan) { 
    // Calculates the monthly payment of a conventional loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

// let interestOnlyPayment = calculateInterestOnlyLoanPayment(30000, 5);
// let conventionalPayment = calculateConventionalLoanPayment(30000, 5, 180);

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 3000, interestRate:5})
let conventionalPayment = calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});

console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 
