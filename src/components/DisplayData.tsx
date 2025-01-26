import FakerData from "../fakerData.json";

interface Transaction {
  date: string;
  transactionName: string;
  amount: number;
  category: string;
}

export var data: Transaction[] = [];

const categories = [
  "Housing",
  "Transport",
  "Food",
  "Entertainment",
  "Health",
  "Investments",
  "Miscellaneous",
];

export var labelTotals: number[] = new Array(categories.length).fill(0);
export var totalAmount: number = 0;

export function saveDataToLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(data));
}

export function loadDataFromLocalStorage() {
  const storedData = localStorage.getItem("transactions");
  if (storedData) {
    data = JSON.parse(storedData) as Transaction[];
  }
}

export function addFakerData() {
  const storedData = localStorage.getItem("transactions");
  if (storedData) {
    const existingData = JSON.parse(storedData) as Transaction[];

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

    if (fakerExists) {
      return;
    }
  }

  const validTransactions: Transaction[] = FakerData.map((item) => {
    const amount = Number(item.amount);
    const isValidAmount = !isNaN(amount) && amount >= 0;

    const category = categories.includes(item.category)
      ? item.category
      : "Miscellaneous";

    return isValidAmount
      ? {
          date: item.date,
          transactionName: item.transactionName,
          amount: amount,
          category: category,
        }
      : null;
  }).filter((transaction): transaction is Transaction => transaction !== null);

  data.push(...validTransactions);
  saveDataToLocalStorage();
}

export function updateTotals() {
  labelTotals.fill(0);

  data.forEach((transaction) => {
    const categoryIndex = categories.indexOf(transaction.category);
    if (categoryIndex !== -1) {
      labelTotals[categoryIndex] += transaction.amount;
    }
  });

  totalAmount = labelTotals.reduce((sum, amount) => sum + amount, 0);
}
