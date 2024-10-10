import "./IncomeExpenses.css"

function IncomeExpenses() {
  return (
    <>
      <div className="expenses__container">
        <div className="expenses__income">
          <p className="expenses__text">Income</p>
          <p className="income expenses__income__amount">$500.00</p>
        </div>
        <div className="expenses__expense">
          <p className="expenses__text">Expense</p>
          <p className="expense expenses__expense__amount">$240.00</p>
        </div>
      </div>
    </>
  )
}

export default IncomeExpenses