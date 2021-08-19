import { Card } from "./card";
import styled from "styled-components";
const StyledContainer = styled.div`
.total{
  text-decoration: underline;
  font-size: 25px;
}
button{
  border: solid 1px gray;
  width: 170px;
  height: 50px;
  transition: linear 0.3s;
  box-sizing: content-box;
  padding: 0 5px 0 5px;
  flex: 1;
  
}
button:hover{
  border-radius: 15%;
  border-color: slategray;
  
}
.checkout{
  background-color: black;
  color: white;
  transition: linear 0.2s;
  font-size: 20px;
}
.checkout:hover{
  background-color: white;
  color: black;
}
ul{
  border: solid 2px slategray;
}
`;
export const List = ({ image, items, handleRemove, prices }) => {
   const total = prices.reduce((a, b) => parseFloat(a)+ parseFloat(b))
   const finalTotal = Number.parseFloat(total).toFixed(2);
  
   return (
    <StyledContainer>
    <div>
      <ul>
      {items.map((item, index) => {
        const price = prices[index]
        return <Card key={index} index={index} image={image} price={price} rmFunction={() => handleRemove(index)}>{item}</Card>;
      })}
    </ul>
    <p className="total" >Total: £{finalTotal}</p>
    <button className="checkout" type="button">Checkout</button>
    </div>
    </StyledContainer>
  );
};
