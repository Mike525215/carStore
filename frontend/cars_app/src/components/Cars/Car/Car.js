import s from './Car.module.css';

const Car = (props) => {
    return (
        <div className={s.car}>
            <img className={s.carImage} src={props.car.image} alt="none"/>
            <p className={s.make}>Make: {props.car.make}</p>
            <p className={s.price}>Price: ${props.car.price}</p>
            <button className={s.readMore}>Read more</button>
        </div>
    );
};

export {Car};