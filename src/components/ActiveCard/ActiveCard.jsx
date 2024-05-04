import {useSelector} from "react-redux";

function ActiveCard(){
    const cards = useSelector((state) => state.card);

    return(
        
        <main>
            
            {cards.map((card, index) =>{
               <article key={index}>
                <p>CARD NUMBER: {card.cardNumber}</p>
                <p>NAME: {card.name}</p>
                <p>valid: {card.valid}</p>
                <p>cvv: {card.cvv}</p>
               </article>
            })}
        </main>
    )

}

export default CardArray;