import s from './Cars.module.css';

const Cars = (props) => {
    return (
        <div className={s.cars}>
            {props.cars.map((car) => {
                return (
                    <div className={s.car}>
                        <p>{car.make}</p>
                        <p>{car.price}</p>
                        <img className={s.carImage} src={car.image} alt="none"/>
                    </div>
                );
            })}
        </div>
    );
}

export {Cars};