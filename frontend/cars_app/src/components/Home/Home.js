import s from './Home.module.css';
import {useState, useEffect} from 'react';
import {Cars} from '../Cars/Cars';
import {services} from '../../services/carsServices.service.js';

const Home = () => {
    const [cars, setCars] = useState([]);

    const carsGet = async () => {
        const request = await services.cars();
        const result = await request.json();
        setCars(result);
    }

    useEffect(() => {
        carsGet();
    }, []);

    return (
        <div>
            <section className={s.addCar}>
                <input type="text" className={s.carMake} placeholder="Car make" />
                <input type="text" className={s.carPrice} placeholder="Car price" />
                <input type="text" className={s.carImage} placeholder="Car url" />
                <button className={s.addButton}>Create</button>
            </section>

            <Cars cars={cars} />
        </div>
    );
}

export {Home};