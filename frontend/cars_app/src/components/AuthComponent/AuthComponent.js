import s from './AuthComponent.module.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {services} from '../../services/carsServices.service.js';

const AuthComponent = (props) => {
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [signUp, setStatus] = useState('false');
    const [login, setLogin] = useState('false');

    let html = '';

    if (login === 'true') {
        html =
            <>
                <span className={s.text}>Login was success! To move on home page click link below.</span>
                <Link to='/cars/' className={s.link}>Link</Link>
            </>
    } else {

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
                                        if (result.username[0] === 'A user with that username already exists.') {
                                            setStatus('true');
                                        } else {
                                            console.log(result);
                                        }
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
                    <button className={s.authBtn}
                            onClick={
                                async () => {
                                    const request = await services.login(username, password);
                                    const result = await request.json();
                                    setName('');
                                    setPassword('');
                                    console.log(result);
                                    if (result.auth_token) {
                                        setLogin('true');
                                        localStorage.setItem('token', JSON.stringify(result.auth_token));
                                    } else {
                                        console.log(result);
                                    }
                                }
                            }>Login</button>
                </div>
        }
    }
    return html;
};

export {AuthComponent};
