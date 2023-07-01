import s from './Car.module.css';
import {Link} from 'react-router-dom';

const Car = (props) => {
    return (
        <div className={s.car}>
            <Link to={'/cars/' + props.car.id} className={s.readMore}>
                <img className={s.carImage} src={props.car.image} alt="none"/>
            </Link>
            <p className={s.make}>Make: {props.car.make}</p>
            <p className={s.price}>Price: ${props.car.price}</p>
        </div>
    );
};

export {Car};