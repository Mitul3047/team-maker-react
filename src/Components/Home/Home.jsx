
import { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';


const Home = () => {

    const [allActors, setAllActors] = useState([]);


    useEffect(() => {
        fetch('./data.json')
            .then(r => r.json())
            .then(data => setAllActors(data))
    }, [])

    const [selectedActorAdded, setSelectedActorAdded] = useState([]);

    const handleSelect = (actor) => {
        const isExist = selectedActorAdded.find(item => item.id == actor.id);
        if(isExist){
            return alert("already Booked")
        }
        const newActorAdded = [...selectedActorAdded, actor]
        setSelectedActorAdded(newActorAdded);
    }
    console.log(selectedActorAdded)


    // console.log(allActors)

    return (
        <div className="container">
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map(actor => 
                        (<div key={actor.id} className="card">
                            <div className="card-img">
                                <img className='photo' src={actor.image} alt="" />
                            </div>
                            <h2>{actor.name}</h2>
                            <p><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, aliquid?</small></p>
                            <div className="info">
                                <p>Salary: ${actor.salary}</p>
                                <p>{actor.role}</p>
                            </div>
                            <button onClick={() => handleSelect(actor)} className='card-btn'>Select</button>
                        </div>))
                    }
                </div>
                <div className="cart-container">
                    <Cart selectedActorAdded={selectedActorAdded}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Home;