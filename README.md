
# budget-tracker
[Live Demo](https://budget-tracker.kennyzhang.dev/)

A website that lets users track expenses, filter spending, and visualize data with interactive bar charts.


The goal was to create a tool that allows users to easily manage transactions with real-time updates on totals and graphs. I focused on making the user experience simple, ensuring that users could quickly add, delete, and view their transactions. Local storage was implemented to persist data across sessions, allowing for a seamless experience.

This is a wireframe created before coding this project.

![personal-budget-tracker-wireframe](https://github.com/user-attachments/assets/d5d75ec7-66f9-4cfa-819c-71d950f48b71)

## Installation

Install budget-tracker with git

```bash
  git install https://github.com/kennytrbl/budget-tracker.git
  cd budget-tracker
  npm install
  npm start
```
    
## Usage/Examples

#### Adding a Transaction
- Fill in the required fields:  
   - **Date**: Select the transaction date.  
   - **Transaction Name**: Enter a descriptive name for the transaction.  
   - **Amount**: Input the transaction amount.  
   - **Category**: Choose a category from the dropdown list.  
- Click the **Submit** button to add the transaction.  
- The transaction will appear in the list, and the live totals and graph will update instantly.  

#### Deleting a Transaction
- Locate the transaction you want to delete in the list.  
- Click the **"X"** button next to the transaction.  
- The transaction will be removed, and the live totals and graph will reflect the change.

#### Persistent Data with Local Storage
- All transactions are saved automatically to your browser's local storage.  
- Reload the page, and your data will be reloaded automatically, maintaining your workflow continuity.  

#### Example Workflow
- Add a transaction with the following details:  
   - **Date**: 2025-01-26  
   - **Transaction Name**: "Grocery Shopping"  
   - **Amount**: $50.00  
   - **Category**: Food  
- Watch the live graph and totals update instantly.  
- Delete the transaction and observe the updated totals and graph changes.  

## Features

- Live Graph Previews: Visualize your data in real-time with dynamic and interactive graphs.
- Live Totals: Instantly view updated totals as new transactions are added or modified.
- Local Storage Integration: Automatically save your data locally, ensuring it persists across sessions.


## Tech Stack

React, Typescript, Vercel


## License

[MIT](https://choosealicense.com/licenses/mit/)

