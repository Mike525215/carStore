import s from './Car.module.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {services} from '../../../services/carsServices.service.js';

const Car = (props) => {
    const [edit, setEdit] = useState('false');
    const [make, setMake] = useState(props.car.make);
    const [price, setPrice] = useState(props.car.price);
    const [image, setImage] = useState(props.car.image);

    let html = '';

    if (edit === 'false') {
        html =
            <div className={s.car}>
                <Link to={'/cars/' + props.car.id} className={s.readMore}>
                    <img className={s.carImage} src={props.car.image} alt="none"/>
                </Link>
                <p className={s.make}>Make: {props.car.make}</p>
                <p className={s.price}>Price: ${props.car.price}</p>
                <div className={s.buttons}>
                    <button className={s.edit + ' ' + s.btn}
                            onClick={() => {
                                setEdit('true');
                            }}>Edit</button>
                    <button className={s.deleteBtn + ' ' + s.btn}>Delete</button>
                </div>
            </div>
    } else {
        html =
            <div className={s.carBlock}>
                <input type="text" className={s.carMake} placeholder="Car make"
                           onChange={e => setMake(e.target.value)} value={make} />
                <input type="text" className={s.carPrice} placeholder="Car price"
                           onChange={e => setPrice(e.target.value)} value={price} />
                <input type="text" className={s.image} placeholder="Car image"
                           onChange={e => setImage(e.target.value)} value={image} />
                <button className={s.save + ' ' + s.btn}
                    onClick={() => {
                        setEdit('false');
                    }}>Save</button>
            </div>
    }
    return html;
};

export {Car};