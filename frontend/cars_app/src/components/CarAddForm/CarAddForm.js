import s from './CarAddForm.module.css';

const CarAddForm = () => {
    return (
        <section className={s.addCar}>
            <input className={s.carMake} />
            <input className={s.carPrice} />
            <input className={s.carImage} />
            <button className={s.addButton}>Create</button>
        </section>
    );
}

export {CarAddForm};