import FakerData from "../fakerData.json";
interface Transaction {
  date: string;
  transactionName: string;
  amount: number;
  category: string;
}

export var data: Transaction[] = [];

// Categories for transactions
export const categories = [
  "Housing",
  "Transport",
  "Food",
  "Entertainment",
  "Health",
  "Investments",
  "Miscellaneous",
];

// Total amount for each category
export var labelTotals: number[] = new Array(categories.length).fill(0);
export var totalAmount: number = 0;

// Load data from local storage
export function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem("transactions");
  if (storedData) {
    data = JSON.parse(storedData) as Transaction[];
  }
}

// Save data to local storage
export function saveDataToLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(data));
}

// Add faker data to the transactions
export function addFakerData() {
  // Load data from local storage
  const storedData = localStorage.getItem("transactions");
  // If there is no data in local storage, add all faker data
  if (storedData) {
    const existingData = JSON.parse(storedData) as Transaction[];

    // Check if all faker data already exists
    const fakerExists = FakerData.every((item) =>
      existingData.some(
        (transaction) =>
          transaction.date === item.date &&
          transaction.transactionName === item.transactionName &&
          transaction.amount === Number(item.amount) &&
          transaction.category ===
            (categories.includes(item.category)
              ? item.category
              : "Miscellaneous")
      )
    );
    // If all faker data already exists, return
    if (fakerExists) {
      return;
    }
  }

  // Add faker data to the transactions
  const validTransactions: Transaction[] = FakerData.map((item) => {
    // Check if the amount is valid
    const amount = Number(item.amount);
    const isValidAmount = !isNaN(amount) && amount >= 0;

    // Check if the category is valid
    const category = categories.includes(item.category)
      ? item.category
      : "Miscellaneous";

    // Return the transaction if it is valid
    return isValidAmount
      ? {
          date: item.date,
          transactionName: item.transactionName,
          amount: amount,
          category: category,
        }
      : null;
  }).filter((transaction): transaction is Transaction => transaction !== null);

  // Add valid transactions to the data
  data.push(...validTransactions);
  saveDataToLocalStorage();
}

// Update the total amount for each category
export function updateTotals() {
  labelTotals.fill(0);

  data.forEach((transaction) => {
    const categoryIndex = categories.indexOf(transaction.category);
    if (categoryIndex !== -1) {
      labelTotals[categoryIndex] += transaction.amount;
    }
  });

  // Update the total amount
  totalAmount = labelTotals.reduce((sum, amount) => sum + amount, 0);
}
