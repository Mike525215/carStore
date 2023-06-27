import s from './Cars.module.css';

const Cars = (props) => {
    return (
        <div className={s.cars}>
            {props.cars.map((car) => {
                return (
                    <div className={s.car}>
                        <img className={s.carImage} src={car.image} alt="none"/>
                        <p className={s.make}>Make: {car.make}</p>
                        <p className={s.price}>Price: ${car.price}</p>
                        <button className={s.readMore}>Read more</button>
                    </div>
                );
            })}
        </div>
    );
}

export {Cars};