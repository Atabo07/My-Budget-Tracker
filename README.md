# My Budget Tracker

## Week 2 Assignment

### Project Description

My Budget Tracker is a simple web application created using HTML and CSS. The project helps users record and view their expenses in an organized way.

This project was continued from the Week 1 Budget Tracker. In Week 2, I improved the project by adding an expense table, an upgraded expense form, multimedia content, an interactive instructions section, and advanced CSS selectors.

---

## Technologies Used

* HTML5
* CSS3
* YouTube Embed
* Visual Studio Code
* Git and GitHub

---

## Project Files

The project contains the following files:

```text
My-Budget-Tracker/
│
├── index.html
├── style.css
└── README.md
```

### 1. index.html

The `index.html` file contains the structure and content of the Budget Tracker.

It includes:

* Main heading and introduction
* Add Expense form
* Expense name input
* Expense amount input
* Expense category dropdown
* Expense date input
* Add Expense button
* Expense table
* Sample expense records
* How to use section
* Budgeting YouTube video

### 2. style.css

The `style.css` file controls the appearance of the Budget Tracker.

It includes:

* Page background and font styling
* Form styling
* Input and select styling
* Button styling
* Expense table styling
* Table borders and padding
* Alternating table row colors
* Hover effects
* Input focus effects
* Video section styling
* Instructions section styling

### 3. README.md

This file explains the project, technologies used, features implemented, and the purpose of each project file.

---

## Week 2 Features

### 1. Expense Table

I replaced the "No expenses yet" placeholder with a properly structured HTML table.

The table uses:

* `<table>`
* `<thead>`
* `<tbody>`
* `<tr>`
* `<th>`
* `<td>`

The table contains four columns:

| Name        | Amount    | Category      | Date       |
| ----------- | --------- | ------------- | ---------- |
| Groceries   | KSh 1,500 | Food          | 2026-09-01 |
| Bus Fare    | KSh 300   | Transport     | 2026-09-02 |
| House Rent  | KSh 8,000 | Rent          | 2026-09-03 |
| Movie       | KSh 700   | Entertainment | 2026-09-05 |
| Mobile Data | KSh 500   | Other         | 2026-09-07 |

The table is styled using borders, padding, a colored header, and alternating row colors.

---

## 2. Upgraded Add Expense Form

The Add Expense section was improved by adding a proper `<form>` element.

The form contains:

* Expense name input
* Expense amount input
* Expense category dropdown
* Expense date input
* Add Expense button

The category dropdown contains five categories:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Other

Each form control has a clear and matching `id` attribute so that JavaScript can be added in future weeks.

---

## 3. Multimedia Content

I added an image near the main heading using the `<img>` element.

The image includes:

* `src`
* `alt`
* `width`

I also added a YouTube video using an `<iframe>`.

The iframe includes:

* `width`
* `height`
* `src`
* `title`
* `frameborder`
* `allowfullscreen`

The video provides additional information related to budgeting and personal finance.

---

## 4. Interactive Elements

I added a collapsible section using:

```html
<details>
    <summary>How to use this tracker</summary>
</details>
```

This section explains how users can use the Budget Tracker.

I also added hover effects to the expense table rows. When the user moves the mouse over a row, its background changes.

The Add Expense button also uses:

```css
cursor: pointer;
```

This displays a hand cursor when the user moves the mouse over the button.

---

## 5. Advanced CSS Selectors

I applied several advanced CSS selectors from the Week 2 lesson.

### Descendant Selector

```css
.your-expenses td {
    font-size: 14px;
}
```

This styles the table cells inside the Your Expenses section.

### Direct Child Selector

```css
.add-expense > form {
    margin-top: 20px;
}
```

This targets the form that is a direct child of the Add Expense section.

### Position Pseudo-Class

```css
tr:nth-child(even) {
    background-color: #f2f2f2;
}
```

This gives alternating background colors to the table rows.

### Negation Pseudo-Class

```css
input:not([type="submit"]) {
    background-color: #ffffff;
}
```

This applies styling to inputs that are not submit buttons.

### Focus Pseudo-Class

```css
input:focus,
select:focus {
    border: 2px solid #3498db;
}
```

This changes the border when the user clicks inside an input or select field.

### Hover Pseudo-Class

```css
tbody tr:hover {
    background-color: #dfefff;
}
```

This changes the background of an expense row when the mouse moves over it.

---

## Future Improvements

The Add Expense button does not currently add new expenses automatically because JavaScript will be introduced in a later week.

Future improvements may include:

* Adding JavaScript functionality
* Automatically adding new expenses to the table
* Calculating total expenses
* Validating form input
* Adding income tracking
* Adding a budget summary
* Saving expense data
