# SpendWise – Week 5: JavaScript Foundation

## About SpendWise

SpendWise is a budget tracking web application that helps users keep track of their budget and expenses.

In Week 5, JavaScript was added to the existing SpendWise project. The JavaScript allows the application to collect budgeting information from the user, store data, perform calculations, and display the results in the browser console.

## JavaScript Concepts Implemented

The Week 5 project demonstrates:

* Variables
* Data types
* User input
* Type conversion
* Calculations
* Functions
* Conditional statements
* Console output

## Variables

Variables are used to store important budgeting information.

```javascript
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;
```

The `budget` variable stores the user's budget.

The `totalExpenses` variable stores the user's total expenses.

The `remainingBalance` variable stores the amount left after expenses are deducted from the budget.

## Collecting User Input

SpendWise uses the JavaScript `prompt()` function to collect information from the user.

```javascript
let userBudget = prompt("Enter your monthly budget:");
```

The input is converted into a number using `Number()`.

```javascript
budget = Number(userBudget);
```

The same method is used to collect and convert the user's expenses.

## Budget Calculations

The remaining balance is calculated by subtracting total expenses from the budget.

```javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}
```

For example:

```text
Budget = KES 30,000
Expenses = KES 18,500

Remaining Balance = KES 11,500
```

## Functions

Functions help organize the JavaScript code into reusable sections.

The project uses the following functions:

* `calculateBalance()` – calculates the remaining balance.
* `getBudget()` – collects the user's budget.
* `getExpenses()` – collects the user's expenses.
* `displayBudgetSummary()` – displays the budget results in the console.

## Displaying Results

The results are displayed in the browser console using `console.log()`.

The application displays:

* Monthly budget
* Total expenses
* Remaining balance
* Budget status

## Project Files

```text
SpendWise/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Conclusion

The Week 5 JavaScript foundation changes SpendWise from a purely visual application into an application that can process budgeting data.

Users can enter their budget and expenses, while JavaScript stores the information, performs calculations, and displays the results in the browser console.
