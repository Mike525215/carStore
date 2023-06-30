import s from './Home.module.css';
import {useState, useEffect, createContext} from 'react';
import {Link} from 'react-router-dom';
import {Cars} from '../Cars/Cars';
import {services} from '../../services/carsServices.service.js';


const Home = (props) => {
    const [cars, setCars] = useState([]);
    const [make, setMake] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [msg, setMsg] = useState('');

    let html = '';
    const carsGet = async () => {
        const request = await services.cars(props.token);
        const result = await request.json();
        if (result.detail) {
            setMsg(result.detail);
            console.log(props.token);
        } else {
            setCars(result);
        }
    }

    useEffect(() => {
        carsGet();
    }, []);

    if (msg) {
        return <span>{msg}</span>;
    } else {

    return (
        <div>
           <section className={s.addCar}>
                <input type="text" className={s.carMake} placeholder="Car make"
                       onChange={e => setMake(e.target.value)} value={make} />
                <input type="text" className={s.carPrice} placeholder="Car price"
                       onChange={e => setPrice(e.target.value)} value={price} />
                <input type="text" className={s.carImage} placeholder="Car url"
                       onChange={e => setImage(e.target.value)} value={image} />
                <button className={s.addButton}
                       onClick={
                            async () => {
                                await services.addCar(make, price, image);
                                setMake('');
                                setPrice('');
                                setImage('');
                                carsGet();
                            }
                        }>Create</button>
            </section>
            <div className={s.title}><span>Cars catalog</span></div>

            <Cars cars={cars} />
        </div>
    );
    };
}

export {Home};