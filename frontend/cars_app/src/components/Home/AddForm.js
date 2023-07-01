import s from './AddForm.module.css';
import {services} from '../../services/carsServices.service.js';

const AddForm = (props) => {
    return (
        <section className={s.addCar}>
                <input type="text" className={s.carMake} placeholder="Car make"
                       onChange={e => props.setMake(e.target.value)} value={props.make} />
                <input type="text" className={s.carPrice} placeholder="Car price"
                       onChange={e => props.setPrice(e.target.value)} value={props.price} />
                <input type="text" className={s.carImage} placeholder="Car url"
                       onChange={e => props.setImage(e.target.value)} value={props.image} />
                <button className={s.addButton}
                       onClick={
                            async () => {
                                await services.addCar(props.make, props.price, props.image, props.token);
                                props.setMake('');
                                props.setPrice('');
                                props.setImage('');
                                props.carsGet();
                            }
                        }>Create</button>
        </section>
    )
};

export {AddForm};