import { useState } from "react"
import "./TransactionList.css"

function TransactionList() {

  const [transactions, setTranscactions] = useState([
    {
      id: 1,
      name: "Cash",
      amount: 50
    },
    {
      id: 2,
      name: "Bank",
      amount: -40
    },
    {
      id: 3,
      name: "Cash",
      amount: -200
    },
  ])

  return (
    <>
      <div className="history__container">
        <p className="history__text">History</p>
        <hr />
        <div className="transactions__container">
          {transactions.map(transaction => {
            return (
              <div key={transaction.id} className={`${transaction.amount >= 0 ? "transaction__income" : "transaction__expense"} transaction__container`}>
                <p className="transaction_name">
                  {transaction.name}
                </p>
                <p className="transaction__amount">
                  {transaction.amount >= 0 ? `+${transaction.amount}` : `-${transaction.amount}`}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default TransactionList