import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {

    return (
        <div className="expenses">
            <h2>Expense List</h2>
            {props.items.map((item) => (
                <ExpenseItem title={item.title} amount={item.amount} date={item.date}></ExpenseItem>
            ))}
        </div>

    );
}
export default Expenses;