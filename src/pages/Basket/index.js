import { List } from "./list"

export const Cart = ({ items, setItems, prices, setPrices }) => {
  const handleRemove = (itemIndex) => {
    let newArray = [...items];
    let newArray2 = [...prices];
    newArray.splice(itemIndex, 1);
    newArray2.splice(itemIndex, 1);
    setItems(newArray);
    setPrices(newArray2);
  };

  return (
      <div className="container">
        <div className="wrapper">
          {items.length > 0 && (
            <List items={items} prices={prices} handleRemove={handleRemove} />
          )}
        </div>
      </div>
  );
};

export default Cart;