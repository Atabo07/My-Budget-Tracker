# SpendWise

A simple budgeting app that lets you set a monthly budget, log expenses, and see instantly how you are doing. Built with HTML, CSS and JavaScript.

**How to run:** open `index.html` in a browser. No install needed.

## Improvements made this week

- Added a budget form and an expense form that work without reloading the page.
- Expenses are stored in an array instead of separate variables.
- A live dashboard shows budget, total spent, remaining, and the biggest spending category.
- A progress bar and a status message change with your spending.
- Expenses can be deleted one at a time, filtered by category, or cleared all at once.
- Large expenses (half the budget or more) are highlighted in red.

## How conditionals are used

- `getStatus()` uses `if / else if / else` to give feedback: over budget, 80% or more used (warning), no spending yet, or on track.
- Form validation checks for an empty name or an amount that is not above 0, and shows an error message.
- Inside the list loop, a conditional skips expenses that do not match the selected filter and flags large expenses.
- An empty state message shows when there is nothing to display.

## How arrays are used to store data

- `expenses` is an array of objects: `{ id, name, amount, category }`.
- `push()` adds a new expense, `filter()` removes one by its `id`, and `expenses = []` clears everything.
- `categories` is an array used to build the filter dropdown.

## How loops are used

- A `for` loop in `getTotal()` adds up all amounts.
- `for...of` loops build the category totals, the filter options, and the expense list on the page.
- A `for...in` loop finds the category with the highest total.

## How the DOM is updated

- `render()` calls `renderDashboard()` and `renderList()` after every change.
- Text is updated with `textContent`, the progress bar width and colour with `style`, and the status colour by changing a CSS class.
- The list is rebuilt with `document.createElement()` and `appendChild()`, using `textContent` so user input is never treated as HTML.

## How user interactions are handled through events

- `submit` on the budget form and the expense form (with `preventDefault()` to stop the page reloading).
- `click` on the list, using one listener for all Delete buttons (event delegation with `data-id`).
- `change` on the category filter, and `click` on "Clear all expenses".

Flow: user action -> event listener -> update the `expenses` array or `budget` -> `render()` -> the page shows the new result.

## Challenges and how I solved them

- **Page reloading on submit:** the form refreshed the page and wiped the data. Fixed with `e.preventDefault()`.
- **Delete buttons for items created by JavaScript:** they did not exist when the page loaded, so I used event delegation on the parent `<ul>`.
- **Deleting the right item:** using the array position broke after filtering, so each expense gets a unique `id`.
- **Numbers as text:** input values are strings, so I convert with `Number()` before doing maths.

## Possible next steps

Save data with `localStorage` so expenses survive a refresh.
# SpendWise

A simple budgeting app that lets you set a monthly budget, log expenses, and see instantly how you are doing. Built with HTML, CSS and JavaScript.

**How to run:** open `index.html` in a browser. No install needed.

## Improvements made this week

- Added a budget form and an expense form that work without reloading the page.
- Expenses are stored in an array instead of separate variables.
- A live dashboard shows budget, total spent, remaining, and the biggest spending category.
- A progress bar and a status message change with your spending.
- Expenses can be deleted one at a time, filtered by category, or cleared all at once.
- Large expenses (half the budget or more) are highlighted in red.

## How conditionals are used

- `getStatus()` uses `if / else if / else` to give feedback: over budget, 80% or more used (warning), no spending yet, or on track.
- Form validation checks for an empty name or an amount that is not above 0, and shows an error message.
- Inside the list loop, a conditional skips expenses that do not match the selected filter and flags large expenses.
- An empty state message shows when there is nothing to display.

## How arrays are used to store data

- `expenses` is an array of objects: `{ id, name, amount, category }`.
- `push()` adds a new expense, `filter()` removes one by its `id`, and `expenses = []` clears everything.
- `categories` is an array used to build the filter dropdown.

## How loops are used

- A `for` loop in `getTotal()` adds up all amounts.
- `for...of` loops build the category totals, the filter options, and the expense list on the page.
- A `for...in` loop finds the category with the highest total.

## How the DOM is updated

- `render()` calls `renderDashboard()` and `renderList()` after every change.
- Text is updated with `textContent`, the progress bar width and colour with `style`, and the status colour by changing a CSS class.
- The list is rebuilt with `document.createElement()` and `appendChild()`, using `textContent` so user input is never treated as HTML.

## How user interactions are handled through events

- `submit` on the budget form and the expense form (with `preventDefault()` to stop the page reloading).
- `click` on the list, using one listener for all Delete buttons (event delegation with `data-id`).
- `change` on the category filter, and `click` on "Clear all expenses".

Flow: user action -> event listener -> update the `expenses` array or `budget` -> `render()` -> the page shows the new result.

## Challenges and how I solved them

- **Page reloading on submit:** the form refreshed the page and wiped the data. Fixed with `e.preventDefault()`.
- **Delete buttons for items created by JavaScript:** they did not exist when the page loaded, so I used event delegation on the parent `<ul>`.
- **Deleting the right item:** using the array position broke after filtering, so each expense gets a unique `id`.
- **Numbers as text:** input values are strings, so I convert with `Number()` before doing maths.

## Possible next steps

Save data with `localStorage` so expenses survive a refresh.
# SpendWise

A simple budgeting app that lets you set a monthly budget, log expenses, and see instantly how you are doing. Built with HTML, CSS and JavaScript.

**How to run:** open `index.html` in a browser. No install needed.

## Improvements made this week

- Added a budget form and an expense form that work without reloading the page.
- Expenses are stored in an array instead of separate variables.
- A live dashboard shows budget, total spent, remaining, and the biggest spending category.
- A progress bar and a status message change with your spending.
- Expenses can be deleted one at a time, filtered by category, or cleared all at once.
- Large expenses (half the budget or more) are highlighted in red.

## How conditionals are used

- `getStatus()` uses `if / else if / else` to give feedback: over budget, 80% or more used (warning), no spending yet, or on track.
- Form validation checks for an empty name or an amount that is not above 0, and shows an error message.
- Inside the list loop, a conditional skips expenses that do not match the selected filter and flags large expenses.
- An empty state message shows when there is nothing to display.

## How arrays are used to store data

- `expenses` is an array of objects: `{ id, name, amount, category }`.
- `push()` adds a new expense, `filter()` removes one by its `id`, and `expenses = []` clears everything.
- `categories` is an array used to build the filter dropdown.

## How loops are used

- A `for` loop in `getTotal()` adds up all amounts.
- `for...of` loops build the category totals, the filter options, and the expense list on the page.
- A `for...in` loop finds the category with the highest total.

## How the DOM is updated

- `render()` calls `renderDashboard()` and `renderList()` after every change.
- Text is updated with `textContent`, the progress bar width and colour with `style`, and the status colour by changing a CSS class.
- The list is rebuilt with `document.createElement()` and `appendChild()`, using `textContent` so user input is never treated as HTML.

## How user interactions are handled through events

- `submit` on the budget form and the expense form (with `preventDefault()` to stop the page reloading).
- `click` on the list, using one listener for all Delete buttons (event delegation with `data-id`).
- `change` on the category filter, and `click` on "Clear all expenses".

Flow: user action -> event listener -> update the `expenses` array or `budget` -> `render()` -> the page shows the new result.

## Challenges and how I solved them

- **Page reloading on submit:** the form refreshed the page and wiped the data. Fixed with `e.preventDefault()`.
- **Delete buttons for items created by JavaScript:** they did not exist when the page loaded, so I used event delegation on the parent `<ul>`.
- **Deleting the right item:** using the array position broke after filtering, so each expense gets a unique `id`.
- **Numbers as text:** input values are strings, so I convert with `Number()` before doing maths.

## Possible next steps

Save data with `localStorage` so expenses survive a refresh.
