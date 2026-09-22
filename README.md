# SpendWise Dashboard

## Week 4 Assignment – Rebuild the Tracker's Layout with Flexbox and Grid

### Project Description

SpendWise is a personal finance dashboard designed to help users view and organize their financial information in a clean and responsive interface.

This project was continued from the previous weeks of the Budget Tracker project. In Week 4, I rebuilt the layout into a modern dashboard shell using **CSS Grid and Flexbox**.

The dashboard contains a sidebar navigation menu, a dashboard header, six financial category cards, and a recent expenses section. The financial information is static for this week because JavaScript functionality is not required yet.

---

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Google Fonts
* Visual Studio Code
* Git and GitHub

---

## Project Files

The project contains the following files:

```text
SpendWise/
│
├── index.html
├── style.css
└── README.md
```

### 1. index.html

The `index.html` file contains the structure and content of the SpendWise Dashboard.

It includes:

* SpendWise branding
* Sidebar navigation
* Dashboard header
* Welcome section
* Financial overview
* Six financial category cards
* Recent expenses section
* Static financial information

### 2. style.css

The `style.css` file controls the layout, appearance, responsiveness, and interactions of the dashboard.

It includes:

* Universal CSS reset
* CSS custom properties
* CSS Grid
* Flexbox
* Responsive design
* Card styling
* Hover effects
* Keyboard focus effects
* Typography
* Colors
* Spacing
* Borders
* Shadows
* Dark theme support

### 3. README.md

This file explains the project, technologies used, dashboard structure, CSS techniques, responsive design, and improvements made during Week 4.

---

# Week 4 Dashboard Features

## 1. Sidebar Navigation

I created a sidebar navigation menu for the SpendWise Dashboard.

The sidebar contains:

1. Dashboard
2. Expenses
3. Income
4. Savings
5. Reports
6. Settings

The navigation items are arranged using **Flexbox**.

The active Dashboard item is visually highlighted to make the current page clear.

---

## 2. Dashboard Header

I created a dashboard header containing:

* SpendWise Dashboard title
* Short description
* Welcome message
* Personal Budget information

The header uses **Flexbox** to arrange the content horizontally on larger screens.

---

## 3. Financial Category Cards

The dashboard contains six financial category cards with realistic static information.

The categories are:

| Category      | Example Information |
| ------------- | ------------------- |
| Food          | KSh 1,500           |
| Transport     | KSh 800             |
| Rent          | KSh 8,000           |
| Entertainment | KSh 700             |
| Savings       | KSh 5,000           |
| Utilities     | KSh 1,200           |

Each card contains:

* Category icon
* Category name
* Amount
* Description
* Transaction or budget information

The cards use **Flexbox** internally to organize their content.

---

# CSS Grid Implementation

CSS Grid is used for the overall dashboard layout.

The main dashboard uses:

```css
.dashboard {
    display: grid;
    grid-template-columns: 240px 1fr;
}
```

This creates two main areas:

1. Sidebar
2. Main dashboard content

CSS Grid is also used to arrange the six financial cards into multiple columns.

```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

This allows the cards to be displayed in a clean dashboard-style layout.

---

# Flexbox Implementation

Flexbox is used in several areas of the dashboard.

### Sidebar

The sidebar navigation uses Flexbox to arrange the navigation items vertically.

```css
.navigation {
    display: flex;
    flex-direction: column;
}
```

### Header

The dashboard header uses Flexbox to position the heading and welcome information.

```css
.dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

### Financial Cards

The content inside each financial card uses Flexbox.

```css
.financial-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```

This keeps the card content organized and evenly spaced.

---

# CSS Custom Properties

I created a theme using CSS custom properties inside the `:root` selector.

The variables include:

```css
:root {
    --brand-color: #164e63;
    --accent-color: #15803d;
    --surface-color: #ffffff;
    --background-color: #eef4f8;
    --primary-text: #263238;
    --secondary-text: #64748b;
}
```

These variables are reused throughout the stylesheet.

This makes it easier to maintain a consistent color theme and change the design in the future.

---

# Responsive Design

The dashboard is designed to work on both large and small screens.

A media query is used below **768px**:

```css
@media (max-width: 767px) {
    .dashboard {
        grid-template-columns: 1fr;
    }

    .card-grid {
        grid-template-columns: 1fr;
    }
}
```

On smaller screens:

* The sidebar and main content use a single-column layout.
* The financial cards are displayed in one column.
* The dashboard header becomes vertically arranged.
* Navigation items become more compact.
* The content padding is reduced.

The responsive layout can be tested using the browser's **DevTools Device Toolbar**.

---

# Card Micro-Interactions

I added subtle animations to the financial cards to improve the user experience.

The cards respond to both:

* Mouse hover
* Keyboard focus

The animation uses `transform` and `box-shadow`.

```css
.financial-card:hover,
.financial-card:focus {
    transform: translateY(-5px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
}
```

The transition duration is:

```css
transition:
    transform 200ms ease,
    box-shadow 200ms ease;
```

The animation lasts **200 milliseconds**, which is within the required maximum of 250 milliseconds.

---

# Keyboard Accessibility

I added keyboard focus styling to the navigation and dashboard cards.

For example:

```css
.nav-item:focus {
    outline: 2px solid white;
    outline-offset: 2px;
}
```

The financial cards also use:

```css
.financial-card:focus-visible {
    outline: 3px solid var(--accent-color);
}
```

This makes interactive areas easier to identify when navigating using a keyboard.

---

# Dark Theme

As a stretch goal, I added support for the user's preferred dark color scheme.

The dark theme uses:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --brand-color: #67e8f9;
        --accent-color: #4ade80;
        --surface-color: #17212b;
        --background-color: #0f1720;
        --primary-text: #f1f5f9;
        --secondary-text: #a8b3c2;
    }
}
```

The dark theme overrides the CSS custom properties rather than rewriting the entire stylesheet.

---

# No Absolute Positioning

The dashboard layout does not use absolute positioning.

Instead, the project uses:

* CSS Grid for the main page structure
* CSS Grid for the financial cards
* Flexbox for navigation
* Flexbox for the header
* Flexbox for card content
* Flexbox for the recent expenses section

This makes the layout easier to maintain and responsive across different screen sizes.

---

# Previous Week Features

The SpendWise Dashboard was developed from the previous Budget Tracker project.

### Week 2

The project originally included:

* Expense form
* Expense category dropdown
* Expense date input
* Expense table
* Sample expense records
* YouTube budgeting video
* Interactive instructions section
* Advanced CSS selectors

### Week 3

The visual identity was improved with:

* Consistent color palette
* Google Fonts
* Improved typography
* Styled form
* Styled expense table
* Rounded corners
* Borders
* Shadows
* CSS box model
* Card-style sections
* Hover and focus effects

### Week 4

The project was redesigned into the SpendWise Dashboard Shell using:

* CSS Grid
* Flexbox
* CSS custom properties
* Responsive design
* Financial category cards
* Sidebar navigation
* Dashboard header
* Card micro-interactions
* Dark theme support

---

# Static Dashboard Information

The dashboard currently uses static information because JavaScript functionality is not required for Week 4.

The current dashboard displays example financial information such as:

* Food spending
* Transport spending
* Rent
* Entertainment
* Savings
* Utilities
* Recent expenses

Future JavaScript functionality will allow this information to become dynamic.

---

# Future Improvements

Future improvements may include:

* Adding JavaScript functionality
* Making the Add Expense form functional
* Automatically adding new expenses
* Calculating total expenses
* Tracking income
* Calculating savings
* Adding charts and reports
* Saving data using local storage
* Adding expense filtering
* Adding expense categories dynamically
* Creating a complete personal finance management system
