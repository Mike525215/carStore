import s from './Cars.module.css';
import {Car} from './Car/Car';
const Cars = (props) => {
    return (
        <div className={s.cars}>
            {props.cars.map(car => <Car key={car.id} car={car} />)}
        </div>
    );
}

export {Cars};