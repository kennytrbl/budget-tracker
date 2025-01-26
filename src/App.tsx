import React from "react";
import "./App.css";
import TotalAmountSpent from "./components/TotalAmountSpent.tsx";
import BarGraph from "./components/BarGraph.tsx";
import Footer from "./components/Footer.tsx";
import InputForm from "./components/InputForm.tsx";

function App() {
  return (
    <div className="App">
      <p id="title">Personal Budget Tracker</p>
      <TotalAmountSpent />
      <BarGraph />
      <div style={{ margin: "30px" }}>
        <InputForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
