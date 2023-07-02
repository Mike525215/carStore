import s from './CarDetail.module.css';
import {Car} from '../Cars/Car/Car';
import {useParams, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {services} from '../../services/carsServices.service.js';

const CarDetail = () => {
    const id = useParams().id;
    const [car, setCar] = useState('');
    const requestCar = async () => {
        const request = await services.getCar(id);
        const result = await request.json();
        setCar(result);
    }
    useEffect(() => {
        requestCar();
    }, []);
    return (
        <main>
            <Link className={s.backLink} to='/cars'>HOME</Link>
            <div className={s.car}>
                <img className={s.carImage} src={car.image} alt="none"/>
                <p className={s.make}>Make: {car.make}</p>
                <p className={s.price}>Price: ${car.price}</p>
            </div>
        </main>
    );
}

export {CarDetail};