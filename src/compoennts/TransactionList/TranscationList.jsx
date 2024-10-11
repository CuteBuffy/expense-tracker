import { useState, useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"
import "./TransactionList.css"

function TransactionList() {

  const { transactions } = useContext(GlobalContext)
  const { deleteTransaction } = useContext(GlobalContext)

  return (
    <>
      <div className="history__container">
        <p className="history__text">History</p>
        <hr />
        <div className="transactions__container">
          {transactions.map(transaction => {

            const sign = transaction.amount < 0 ? "-" : "+"

            return (
              <div onClick={() => deleteTransaction(transaction.id)} key={transaction.id} className={`${transaction.amount >= 0 ? "transaction__income" : "transaction__expense"} transaction__container`}>
                <p className="transaction_name">
                  {transaction.name}
                </p>
                <p className="transaction__amount">
                  {sign}${Math.abs(transaction.amount)}
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