import { useState } from 'react';
import ShoppingBasket from './ShoppingBasket';
import ShoppingItem from './ShoppingItems';

function Shopping() {
  const [basket, setBasket] = useState([{
    name: 'milk',
    quantity: 1,
  }]);
  const [item, setItem] = useState('');

  const newItem = ({ target }) => {
    setItem(target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const cloneBasket = [...basket];

    for (let i = 0; i < cloneBasket.length; i += 1) {
      if (cloneBasket[i].name === item) {
        cloneBasket[i].quantity += 1;
        return setBasket(cloneBasket);
      }
    }
    return setBasket((currentBasket) => [...currentBasket, { name: item, quantity: 1 }]);
  };

  const deleteItem = (index) => {
    const cloneBasket = [...basket];
    cloneBasket.splice(index, 1);
    setBasket(cloneBasket);
  };

  return (
    <div>
      <ShoppingItem newItem={newItem} handleAdd={handleAdd} />
      <ShoppingBasket basket={basket} deleteItem={deleteItem} />
    </div>
  );
}

export default Shopping;
