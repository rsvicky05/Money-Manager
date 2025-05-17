import './index.css'

const MoneyDetails = props => {
  const {Income, Expense} = props
  return (
    <>
      <div className="each-detail balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="icon"
        />
        <div className="mon-con">
          <p className="mon-text">Your Balance</p>
          <p className="money" data-testid="balanceAmount">
            Rs {Income - Expense}
          </p>
        </div>
      </div>
      <div className="each-detail income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="icon"
        />
        <div className="mon-con">
          <p className="mon-text">Your Income</p>
          <p className="money" data-testid="incomeAmount">
            Rs {Income}
          </p>
        </div>
      </div>
      <div className="each-detail expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="icon"
        />
        <div className="mon-con">
          <p className="mon-text">Your Expenses</p>
          <p className="money" data-testid="expensesAmount">
            Rs {Expense}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
