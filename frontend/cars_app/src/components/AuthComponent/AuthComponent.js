import s from './AuthComponent.module.css';
import {useState} from 'react';
import {services} from '../../services/carsServices.service.js';

const AuthComponent = () => {
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [signUp, setStatus] = useState('false');

    let html = '';
    if (signUp === 'false') {
        html =
            <div className={s.authForm}>
                <input type="text" placeholder="Username..." className={s.username}
                       onChange={e => setName(e.target.value)} value={username} />
                <input type="password" placeholder="Password..." className={s.password}
                       onChange={e => setPassword(e.target.value)} value={password} />
                <input type="text" placeholder="Email..." className={s.email}
                       onChange={e => setEmail(e.target.value)} value={email} />
                <button className={s.authBtn}
                        onClick={
                            async () => {
                                const request = await services.auth(username, password, email);
                                setName('');
                                setPassword('');
                                setEmail('');
                                const result = await request.json();
                                if (result.id) {
                                    setStatus('true');
                                } else {
                                    alert('Form was filled incorrectly!');
                                }
                            }
                        }>Authorization</button>
            </div>
    } else {
        html =
            <div className={s.authForm}>
                <input type="text" placeholder="Username..." className={s.username}
                       onChange={e => setName(e.target.value)} value={username} />
                <input type="password" placeholder="Password..." className={s.password}
                       onChange={e => setPassword(e.target.value)} value={password} />
                <button className={s.authBtn}>Login</button>
            </div>
    }
    return html;
};

export {AuthComponent};
