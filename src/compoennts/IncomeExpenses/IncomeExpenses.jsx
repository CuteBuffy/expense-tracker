import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"
import "./IncomeExpenses.css"

function IncomeExpenses() {

  const { transactions } = useContext(GlobalContext)
  
  const transactionsAmount = transactions.map(transaction => transaction.amount)
  
  const income = transactionsAmount.filter(amount => amount > 0).reduce((prev, curr) => (prev += curr), 0).toFixed(2)

  const expense = (transactionsAmount.filter(amount => amount < 0).reduce((prev, curr) => (prev += curr), 0) * -1).toFixed(2)

  return (
    <>
      <div className="expenses__container">
        <div className="expenses__income">
          <p className="expenses__text">Income</p>
          <p className="income expenses__income__amount">${income}</p>
        </div>
        <div className="expenses__expense">
          <p className="expenses__text">Expense</p>
          <p className="expense expenses__expense__amount">${expense}</p>
        </div>
      </div>
    </>
  )
}

export default IncomeExpenses