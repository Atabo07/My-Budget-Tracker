// SpendWise - Week 5 JavaScript Foundation

// Variables for budgeting information
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Function to calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Function to collect the user's budget
function getBudget() {
    let userBudget = prompt("Enter your monthly budget:");

    budget = Number(userBudget);

    if (isNaN(budget) || budget < 0) {
        console.log("Invalid budget entered.");
        budget = 0;
    }

    return budget;
}

// Function to collect the user's expenses
function getExpenses() {
    let userExpenses = prompt("Enter your total expenses:");

    totalExpenses = Number(userExpenses);

    if (isNaN(totalExpenses) || totalExpenses < 0) {
        console.log("Invalid expense amount entered.");
        totalExpenses = 0;
    }

    return totalExpenses;
}

// Function to display the budget summary
function displayBudgetSummary() {
    remainingBalance = calculateBalance(budget, totalExpenses);

    console.log("===== SpendWise Budget Summary =====");
    console.log("Monthly Budget: KES " + budget);
    console.log("Total Expenses: KES " + totalExpenses);
    console.log("Remaining Balance: KES " + remainingBalance);

    if (remainingBalance >= 0) {
        console.log("Status: You are within your budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }
}

// Run the SpendWise functions
getBudget();
getExpenses();
displayBudgetSummary();