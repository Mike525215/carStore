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
            <Car car={car} />
            <Link className={s.backLink} to='/cars'>HOME</Link>
        </main>
    );
}

export {CarDetail};