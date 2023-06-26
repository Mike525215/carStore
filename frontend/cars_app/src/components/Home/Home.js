import s from './Home.module.css';
import carList from '../../services/carList.service.js';
import {useState, useEffect} from 'react';

const Home = () => {
    const [make, setMake] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [cars, setCars] = useState([]);

    useEffect(async () => {
        const result = carList().json();
        setCars(result);
    }, []);

    return (
        <section className={s.addCar}>
            <input type="text" className={s.carMake} placeholder="Car make" />
            <input type="text" className={s.carPrice} placeholder="Car price" />
            <input type="text" className={s.carImage} placeholder="Car url" />
            <button className={s.addButton}>Create</button>
        </section>
    );
}

export {Home};