import {getVendorLogo} from "../../reducers/cardReducers"
function Card(props) {
  const { onDelete,card, backgroundColor, onClick} = props;
   const vendorLogo = getVendorLogo(card.vendor);
  

  return (
    <>
    <article 
      className="card"
      style={{ backgroundColor: backgroundColor}}
      onClick={() => onClick(card)} 
    >
      <div className="card-header">
       
        {vendorLogo && (
          <img
            src={`src/assets/image/${vendorLogo}`}
            alt={`${card.vendor} Logo`}
            className="vendor-logo"
          />
        )}
      </div>
      <div className="card-body">
        <p>XXX XXX XXX XXX: {card.cardNumber}</p>
        <p>FIRSTNAME LASTNAME: {card.name}</p>
        <p>Valid: {card.date}</p>
        <p>cvv: {card.cvv}</p>
      </div>
     </article>
     <button style={{marginBottom:"20px"}} onClick={() => onDelete(card)}>delete</button>
      
      </>
  );
}

export default Card;
