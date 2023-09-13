// import PropTypes from 'prop-types';
import './Cart.css'


const Cart = ({ selectedActorAdded,totalCost,remaining }) => {
    // console.log(selectedActorAdded)
    


    return (
        <div className='cart-container'>
            <h4>Total Actor: {selectedActorAdded.length}</h4>
            <h5>Remaining: {remaining}</h5>
            <h3>Team List</h3>
            <h5>Total Cost: {totalCost}</h5>
            {
                selectedActorAdded.map(actor => (
                   <li key={actor.id}>{actor.name}</li> 
                ))
            }
        
        </div>
    );
};
// Cart.propType = {
//     selectedActorAdded: PropTypes.array
// }
export default Cart;