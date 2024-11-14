import React, { useState } from "react";

function TransactionForm() {

    const [totalIncome, setTotalIncome] = useState(0)
    const [income, setIncome] = useState(0)

    const [totalHousing, setTotalHousing] = useState(0)
    const [housing, setHousing] = useState(0)

    const [totalTransportation, setTotalTransportation] = useState(0)
    const [transportation, setTransportation] = useState(0)

    const [totalFood, setTotalFood] = useState(0)
    const [food, setFood] = useState(0)

    const [totalHealthcare, setTotalHealthcare] = useState(0)
    const [healthcare, setHealthcare] = useState(0)

    const [totalDebt, setTotalDebt] = useState(0)
    const [debt, setDebt] = useState(0)

    const [totalOther, setTotalOther] = useState(0)
    const [other, setOther] = useState(0)

    const [totalAfterExpenses, setTotalAfterExpenses] = useState(0)
    const [afterExpenses, setAfterExpenses] = useState(0)

    function handleTotalIncome(){
        setTotalIncome(prevTotal => prevTotal + income)
        setTotalAfterExpenses(prevTotalExp => prevTotalExp + income)
        setIncome(0)
        // clears income after getting total
        console.log(totalIncome)
    }

    function handleAfterExpenses(){
        setTotalAfterExpenses(prevTotalExp => prevTotalExp - housing - transportation - food - healthcare - debt - other)

        setTotalHousing(TH => TH + housing)
        setTotalTransportation(TT => TT + transportation)
        setTotalFood(TH => TH + food)
        setTotalHealthcare(TH => TH + healthcare)
        setTotalDebt(TH => TH + debt)
        setTotalOther(TH => TH + other)

        setHousing(0)
        setTransportation(0)
        setFood(0)
        setHealthcare(0)
        setDebt(0)
        setOther(0)
    }
  
    return(
    <div className="transactionform-container">
        <div className="income-input-container">
            <h1>Input your income</h1>
            <input  type="number" 
                    placeholder="Type income here" 
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}></input>
                    {/* updates income as user types */}
            <button onClick={handleTotalIncome}>add</button>
            <h2>Current Income: {totalIncome}</h2>
        </div>

        <div className="expense-input-container">
            <h1>Input your expenses</h1>

            <label className="expense">Housing:</label>
            <input  type="number" 
                    placeholder="Housing expenses"
                    value={housing}
                    onChange={(e) => setHousing(Number(e.target.value))}
                    className="expense-input"></input> <br></br>


            <label className="expense">Transportation:</label>
            <input  type="number" 
                    placeholder="Transportation expenses"
                    value={transportation}
                    onChange={(e) => setTransportation(Number(e.target.value))}
                    className="expense-input"></input> <br></br>


            <label className="expense">Food:</label>
            <input  type="number" 
                    placeholder="Food expenses"
                    value={food}
                    onChange={(e) => setFood(Number(e.target.value))}
                    className="expense-input"></input> <br></br>


            <label className="expense">Healthcare:</label>
            <input  type="number" 
                    placeholder="Healthcare expenses"
                    value={healthcare}
                    onChange={(e) => setHealthcare(Number(e.target.value))}
                    className="expense-input"></input> <br></br>


            <label className="expense">Debt Payments:</label>
            <input  type="number" 
                    placeholder="Debt payment expenses"
                    value={debt}
                    onChange={(e) => setDebt(Number(e.target.value))}
                    className="expense-input"></input> <br></br>


            <label className="expense">Other Expenses:</label>
            <input  type="number" 
                    placeholder="Other expenses"
                    value={other}
                    onChange={(e) => setOther(Number(e.target.value))}
                    className="expense-input"></input> <br></br>

            <label className="expense">Add all expenses</label>
            <button onClick={handleAfterExpenses}
                    className="expense-button">Add</button>
        </div>
        <div>
            <h1>Expenses data</h1>
            <h2>Housing: {totalHousing}</h2>
            <h2>Transportation: {totalTransportation}</h2>
            <h2>Food: {totalFood}</h2>
            <h2>Healthcare: {totalHealthcare}</h2>
            <h2>Debt Payments: {totalDebt}</h2>
            <h2>Other Expenses: {totalOther}</h2>
        </div>
        <h1>Total income after expenses: {totalAfterExpenses}</h1>
        <div className="expense-history-container">
            <h1>Expenses history:</h1>
        </div>
    </div>
    )
}

export default TransactionForm;
