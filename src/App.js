import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NavBar from "./components/NavBar/NavBar";
import NewExpense from "./components/NewExpense/NewExpense";


const Dummy = [
  {
    id: "e1",
    title: "Plastic Bag",
    amount: 79,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e5",
    title: "Plastic",
    amount: 766,
    date: new Date(2023, 2, 17),
  },
  { id: "e2", title: "Paint", amount: 700, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Water Bill",
    amount: 430,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Bedsheets",
    amount: 1000,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const[expenses,setExpenses]=useState(Dummy);
  
  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NavBar />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
