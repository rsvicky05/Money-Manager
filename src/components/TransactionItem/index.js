import './index.css'

const TransactionItem = props => {
  const {eachTransaction, onDelete} = props
  const {id, title, amt, type} = eachTransaction
  console.log(amt)
  const deleteT = () => {
    onDelete(id)
  }

  return (
    <div className="histroy-body">
      <p className="histroy-body-text">{title}</p>
      <p className="histroy-body-text">Rs{String(amt)}</p>
      <p className="histroy-body-text">{type}</p>
      <button
        className="delete-btn"
        type="button"
        onClick={deleteT}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </div>
  )
}

export default TransactionItem
