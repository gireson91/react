import PropTypes from 'prop-types';

function ShoppingItem({ newItem, handleAdd }) {
  return (
    <form onSubmit={handleAdd}>
      <input type="text" onChange={newItem} placeholder="Enter Item" />
      <button type="submit">Add to Basket</button>
    </form>
  );
}

ShoppingItem.propTypes = {
  newItem: PropTypes.string.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default ShoppingItem;
