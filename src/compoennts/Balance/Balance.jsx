import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"
import "./Balance.css"

function Balance() {

  const { transactions } = useContext(GlobalContext)

  const transactionsAmount = transactions.map(transaction => transaction.amount)
  const totalBalance = transactionsAmount.reduce((prev, curr) => (prev += curr), 0).toFixed(2)

  return (
    <>
      <div className="balance__container">
        <p className="balance__text">Your Balance</p>
        <p className="balance__amount">${totalBalance}</p>
      </div>
    </>
  )
}

export default Balance