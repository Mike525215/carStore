import s from './SignUp.module.css';
import {services} from '../../services/carsServices.service.js';

const SignUp = (props) => {
    return (
        <div className={s.authForm}>
            <input type="text" placeholder="Username..." className={s.username}
                onChange={e => props.setName(e.target.value)} value={props.username} />
            <input type="password" placeholder="Password..." className={s.password}
                onChange={e => props.setPassword(e.target.value)} value={props.password} />
            <input type="text" placeholder="Email..." className={s.email}
                onChange={e => props.setEmail(e.target.value)} value={props.email} />
            <button className={s.authBtn}
                    onClick={
                        async () => {
                            const request = await services.auth(props.username, props.password,
                                                                props.email);
                                props.setName('');
                                props.setPassword('');
                                props.setEmail('');
                                const result = await request.json();
                                if (result.id) {
                                    props.setStatus('true');
                                } else {
                                    if (result.username[0] === 'A user with that username already exists.') {
                                        props.setStatus('true');
                                    } else {
                                        console.log(result);
                                    }
                                }
                        }
                    }>
                    Authorization
            </button>
        </div>
    );
}

export {SignUp};