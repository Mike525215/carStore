import s from './Home.module.css';
import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {Cars} from '../Cars/Cars';
import {services} from '../../services/carsServices.service.js';


const Home = (props) => {
    const [cars, setCars] = useState([]);
    const [make, setMake] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const carsGet = async () => {
        const request = await services.cars(props.token);
        const result = await request.json();
        if (result.detail) {
            setMsg(result.detail);
        } else {
            setCars(result);
        }
    }

    useEffect(() => {
        carsGet();
    });

    if (msg) {
        return (
            <>
                <span className={s.message}>First of all, you have to sign up!</span>
                <Link className={s.link} to="/auth/">Sign Up page</Link>
            </>
        );
    } else {

    return (
        <div>
           <div className={s.userInfo}>
               <span className={s.logo}>Car Collector</span>
               <div>
                   <span className={s.name}>{props.username}</span>
                   <button className={s.outBtn} onClick={
                       async () => {
                           await services.logout(props.username, props.password, props.token);
                           navigate('/auth/');
                       }
                   }>Logout</button>
               </div>

           </div>
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