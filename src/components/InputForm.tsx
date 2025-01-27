import React, { useState, useEffect } from "react";
import "../styles/InputForm.css";
import {
  data,
  addFakerData,
  saveDataToLocalStorage,
  loadDataFromLocalStorage,
} from "./DisplayData.tsx";

// Load data from local storage
loadDataFromLocalStorage();
// Add faker data
addFakerData();

// Input component
function InputComponent({ className, id, type, placeholder }) {
  return (
    <div className={className}>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  );
}

// Input form component
export default function InputForm() {
  const [transactions, setTransactions] = useState(data);

  // Update the transactions
  useEffect(() => {
    setTransactions([...data]);
  }, []);

  // Handle form submission
  const handleSubmit = () => {
    const date = (
      document.getElementById("dateInput") as HTMLInputElement
    ).value.trim();
    const transactionName = (
      document.getElementById("textInput") as HTMLInputElement
    ).value.trim();
    const amountInput = document.getElementById(
      "amountInput"
    ) as HTMLInputElement;
    const amount = parseFloat(amountInput.value);
    const category = (
      document.getElementById("categoryInput") as HTMLInputElement
    ).value;

    // Validate the form
    let errorMessage = "";
    if (!date) errorMessage += "Date is required.\n";
    if (!transactionName) errorMessage += "Transaction Name is required.\n";
    if (!amountInput.value || isNaN(amount) || amount < 0)
      errorMessage += "Valid Amount is required.\n";
    if (!category) errorMessage += "Category is required.\n";

    // Display error message
    if (errorMessage) {
      alert(errorMessage.trim());
      return;
    }

    // Add the new transaction
    const newTransaction = { date, transactionName, amount, category };
    data.unshift(newTransaction);
    saveDataToLocalStorage();
    setTransactions([...data]);
  };

  // Handle delete
  const handleDelete = (index: number) => {
    data.splice(index, 1);
    saveDataToLocalStorage();
    setTransactions([...data]);
  };

  // Return the input form
  return (
    <div className="inputForm">
      <div className="inputFields">
        <InputComponent
          className="date"
          id="dateInput"
          type="date"
          placeholder=""
        />
        <InputComponent
          className="transaction"
          id="textInput"
          type="text"
          placeholder="Transaction Name"
        />
        <InputComponent
          className="amount"
          id="amountInput"
          type="number"
          placeholder="Amount"
        />
        <div className="category">
          <select id="categoryInput">
            <option value="">Select a Category</option>
            <option value="Housing">Housing</option>
            <option value="Transport">Transport</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health">Health</option>
            <option value="Investments">Investments</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <div className="submit">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <div>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index} className="transaction-item">
              <p>{transaction.date}</p>
              <p className="name">{transaction.transactionName}</p>
              <p>${transaction.amount.toFixed(2)}</p>
              <p>{transaction.category}</p>
              <button
                className="delete"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
