import s from './Cars.module.css';

const Cars = (props) => {
    return (
        <div className={s.cars}>
            {props.cars.map(car => <Car car={car} />)}
        </div>
    );
}

export {Cars};