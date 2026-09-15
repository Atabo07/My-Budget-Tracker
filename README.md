# My Budget Tracker

## Week 3 Assignment – Designing the Visual Identity of Budget Tracker

### Project Description

My Budget Tracker is a simple web application created using HTML and CSS. The project helps users record and view their expenses in an organized and easy-to-read way.

This project was continued from Week 1 and Week 2. In Week 3, I focused on improving the visual identity of the Budget Tracker by creating a consistent color palette, adding custom fonts, improving typography, styling the expense form and table, and applying the CSS box model to create clear and organized visual sections.

---

## Technologies Used

* HTML5
* CSS3
* Google Fonts
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

The `style.css` file controls the visual appearance of the Budget Tracker.

It includes:

* Consistent color palette
* Custom Google Fonts
* Typography styling
* Form styling
* Input and select styling
* Button styling
* Expense table styling
* Table borders and padding
* Alternating table row colors
* Hover effects
* Input focus effects
* Rounded corners
* Card-style sections
* Video section styling
* Instructions section styling

### 3. README.md

This file explains the project, technologies used, features implemented, and improvements made during the different weeks.

---

# Week 3 Visual Design Improvements

## 1. Consistent Color Palette

I selected a simple and consistent color palette for the Budget Tracker.

The main colors are used for:

* Page background
* Main headings
* Section headings
* Table header
* Add Expense button
* Form elements
* Borders and backgrounds

The colors were chosen to create a clean, professional, and easy-to-read interface.

---

## 2. Custom Typography

I added custom fonts using Google Fonts.

The project uses:

* **Montserrat** for headings and important titles
* **Open Sans** for body text, labels, form controls, buttons, and table content

Using different fonts for headings and body content creates a clear visual hierarchy and makes the application easier to read.

---

## 3. Styled Add Expense Form

The Add Expense form was improved with:

* Consistent spacing
* Padding
* Borders
* Rounded corners
* Styled input fields
* Styled category dropdown
* Focus effects
* A clearly styled Add Expense button

The form is presented as a separate card so that users can easily identify the data entry area.

---

## 4. Styled Expense Table

The Expense Table was improved using CSS.

The improvements include:

* Styled table header
* Borders around cells
* Consistent padding
* Alternating row colors
* Hover effects
* Clear table headings
* Consistent typography

These improvements make the expense records easier to read and understand.

---

## 5. CSS Box Model

I intentionally applied the CSS box model throughout the project.

I used:

* `margin` to create space between sections
* `padding` to create space inside sections
* `border` to define different areas
* `border-radius` to create rounded corners
* `box-shadow` to create a card-like appearance

The project contains three main visual cards:

1. **Page Heading Card**
2. **Add Expense Form Card**
3. **Expense Table Card**

This creates a more organized and professional layout.

---

## 6. Visual Hierarchy

The design uses different font sizes and weights to make important information stand out.

The hierarchy includes:

* Large main heading for the project title
* Medium-sized section headings
* Clear labels for form controls
* Readable body text
* Clearly defined table headings
* A visible Add Expense button

This helps users understand the different sections of the Budget Tracker more easily.

---

# Week 2 Features

## 1. Expense Table

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

---

## 2. Upgraded Add Expense Form

The Add Expense section contains a proper `<form>` element.

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

Each form control has a clear and matching `id` attribute.

---

## 3. Multimedia Content

I added an image near the main heading using the `<img>` element.

I also added a YouTube video using an `<iframe>`.

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

I also added hover effects to the expense table rows and the Add Expense button.

---

## 5. Advanced CSS Selectors

The project uses several CSS selectors from the Week 2 lesson.

### Descendant Selector

```css
.your-expenses td {
    font-size: 14px;
}
```

This styles table cells inside the Your Expenses section.

### Direct Child Selector

```css
.add-expense > form {
    margin-top: 20px;
}
```

This targets the form that is a direct child of the Add Expense section.

### `:nth-child()` Pseudo-Class

```css
tr:nth-child(even) {
    background-color: #f1f5f9;
}
```

This creates alternating table row colors.

### Negation Pseudo-Class

```css
input:not([type="submit"]) {
    background-color: #f8fafc;
}
```

This applies styling to inputs that are not submit buttons.

### Focus Pseudo-Class

```css
input:focus,
select:focus {
    border: 2px solid #0e7490;
}
```

This changes the input border when the user selects an input or dropdown.

### Hover Pseudo-Class

```css
tbody tr:hover {
    background-color: #d9f0f2;
}
```

This changes the background of an expense row when the mouse moves over it.

---

# Future Improvements

The Add Expense button does not currently add new expenses automatically because JavaScript functionality will be introduced in a later week.

Future improvements may include:

* Adding JavaScript functionality
* Automatically adding new expenses to the table
* Calculating total expenses
* Validating form input
* Adding income tracking
* Adding a budget summary
* Saving expense data
* Creating expense charts and reports