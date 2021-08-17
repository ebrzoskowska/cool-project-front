import { List } from "./list"

export const Cart = ({ items, setItems, prices, setPrices, image, setImage }) => {
  const handleRemove = (itemIndex) => {
    let newArray = [...items];
    let newArray2 = [...prices];
    let newArray3 = [...image];
    newArray.splice(itemIndex, 1);
    newArray2.splice(itemIndex, 1);
    newArray3.splice(itemIndex, 1);
    setItems(newArray);
    setPrices(newArray2);
    setImage(newArray3)
  };

  return (
      <div className="container">
        <div className="wrapper">
          {items.length > 0 && (
            <List image={image} items={items} prices={prices} handleRemove={handleRemove} />
          )}
        </div>
      </div>
  );
};

export default Cart;