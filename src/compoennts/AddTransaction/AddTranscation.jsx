import { useState, useContext } from "react"
import { GlobalContext } from "../../context/GlobalState"
import "./AddTransaction.css"

function AddTransaction() {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { transactions } = useContext(GlobalContext)
  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: transactions.length + 1,
      name: text,
      amount: +amount
    }

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  }

  return (
    <>
      <div className="add__transaction__container">
        <p className="add__transaction__text">Add new transaction</p>
        <hr />
        <form
          className="form__container"
          onSubmit={onSubmit}>
          <div className="form__control">
            <label className="form__control__text" htmlFor="text">Text</label>
            <input
              className="form__input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              id="text"
              type="text"
              maxLength={40}
              placeholder="Enter text..." />
          </div>
          <div className="form__control">
            <label className="form__control__text" htmlFor="amount">
              Amount
              <br />
              (negative - expense, positive - income)
            </label>
            <input
              className="form__input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              id="amount"
              type="number"
              max={1000000000}
              placeholder="Enter amount..." />
          </div>
          <button className="form__btn">Add transaction</button>
        </form>
      </div>
    </>
  )
}

export default AddTransaction