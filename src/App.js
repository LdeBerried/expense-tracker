import './App.css';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";


const App = () => {
    const expenses = [
        {id:1, title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28)},
        {id:2, title: "Toilet Paper", amount: 94.67, date: new Date(2021, 5, 12)},
        {id:3, title: "New TV", amount: 1294.67, date: new Date(2021, 8, 28)},
        {id: 4, title: "New Desk (Wooden)", amount: 294.67, date: new Date(2021, 2, 28)},
        {id: 5, title: "New Desk (Plastic)", amount: 94.67, date: new Date(2021, 5, 12)},
    ];
    return (
        <div>
            <h1>Let's get started!</h1>
            <NewExpense/>
            <Expenses items={expenses}/>
        </div>

    );
}

export default App;
