import PropTypes from 'prop-types';

function ShoppingBasket({ basket, deleteItem }) {
  return (
    <ul>
      {basket.map(({ name, quantity }, i) => (
        <div>
          <p>{`Item: ${name} Quantity: ${quantity}`}</p>
          <button type="button" onClick={() => deleteItem(i)}>X</button>
        </div>
      ))}
    </ul>
  );
}

ShoppingBasket.propTypes = {
  basket: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ShoppingBasket;
