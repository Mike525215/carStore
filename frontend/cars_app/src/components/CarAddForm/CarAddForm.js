import s from './CarAddForm.module.css';

const CarAddForm = () => {
    return (
        <section className={s.addCar}>
            <input type="text" className={s.carMake} placeholder="Car make" />
            <input type="text" className={s.carPrice} placeholder="Car price" />
            <input type="text" className={s.carImage} placeholder="Car url" />
            <button className={s.addButton}>Create</button>
        </section>
    );
}

export {CarAddForm};