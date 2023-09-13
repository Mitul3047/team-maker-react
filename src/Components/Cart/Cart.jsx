// import PropTypes from 'prop-types';
import './Cart.css'


const Cart = ({ selectedActorAdded }) => {
    // console.log(selectedActorAdded)
    


    return (
        <div className='cart-container'>
            <h4>Total Actor: {selectedActorAdded.length}</h4>
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