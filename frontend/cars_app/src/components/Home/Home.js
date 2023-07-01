import s from './Home.module.css';
import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {Cars} from '../Cars/Cars';
import {AddForm} from './AddForm';
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
            const carArray = result.filter(car => car.user === props.username);
            setCars(carArray);
        }
    }

    useEffect(() => {
        carsGet();
    }, []);

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
            <AddForm make={make} price={price} image={image} carsGet={carsGet}
                     setMake={setMake} setPrice={setPrice} setImage={setImage} token={props.token}
                     username={props.username} />
            <div className={s.title}><span>Cars catalog</span></div>

            <Cars cars={cars} />
        </div>
    );
    };
}

export {Home};