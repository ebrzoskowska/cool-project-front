import './basketStyles.css';

export const Card = ({ index, children, rmFunction, image, price }) => {

  return (
      <div className='singlePurchaseWrapper'>
        <img  className='singlePurchaseImg' src = {image[index]} alt = "Gone walk about"></img>
        <span>{children}</span>
        <p>£{price}</p>
        <button className='singlePurchaseRemoveBtn' onClick={rmFunction}>Remove</button>
      </div>
  );
};