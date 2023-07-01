import s from './SignUp.module.css';
import {services} from '../../services/carsServices.service.js';
import {useState} from 'react';

const SignUp = (props) => {
    const [nameError, setNError] = useState('');
    const [passError, setPError] = useState('');

    return (
        <div className={s.authForm}>
            <span className={s.errorN}>{nameError}</span>
            <input type="text" placeholder="Username..." className={s.username}
                onChange={e => props.setName(e.target.value)} value={props.username} />
            <span className={s.errorP}>{passError}</span>
            <input type="password" placeholder="Password..." className={s.password}
                onChange={e => props.setPassword(e.target.value)} value={props.password} />
            <span className={s.errorP}> </span>
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
                                if (result.id && result.username) {
                                    props.setStatus('true');
                                } else {
                                    if (result.username) {
                                        if (result.username[0] === 'A user with that username already exists.') {
                                            props.setStatus('true');
                                        } else {
                                            setNError(result.username[0]);
                                        }
                                    }
                                    if (result.password) {
                                        setPError(result.password[0]);
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