import { Card } from "./card";

export const List = ({ image, items, handleRemove, prices }) => {
   const total = prices.reduce((a, b) => parseFloat(a)+ parseFloat(b))
   const finalTotal = Number.parseFloat(total).toFixed(2);
  

  return (
    <div className='cardContainer'>
      {items.map((item, index) => {
        const price = prices[index]
        return <Card key={index} index={index} image={image} price={price} rmFunction={() => handleRemove(index)}>{item}</Card>;
      })}
        <p className="cardCheckoutPrice" >Total: £{finalTotal}</p>
        <button className="cardCheckoutBtn" type="button">Checkout</button>
     
    </div>
  );
};
