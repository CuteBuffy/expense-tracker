import "./AddTransaction.css"

function AddTransaction() {
  return (
    <>
      <div className="add__transaction__container">
        <p className="add__transaction__text">Add new transaction</p>
        <hr />
        <form className="form__container">
          <div className="form__control">
            <label className="form__control__text" htmlFor="text">Text</label>
            <input className="form__input" id="text" type="text" maxLength={40} placeholder="Enter text..." />
          </div>
          <div className="form__control">
            <label className="form__control__text" htmlFor="amount">
              Amount
              <br />
              (negative - expense, positive - income)
            </label>
            <input className="form__input" id="amount" type="number" max={1000000000} placeholder="Enter amount..." />
          </div>
          <button className="form__btn">Add transaction</button>
        </form>
      </div>
    </>
  )
}

export default AddTransaction