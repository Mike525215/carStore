import s from './SignUp.module.css';
import {services} from '../../services/carsServices.service.js';
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();

    return (
        <div className={s.authForm}>
            <input type="text" placeholder="Username..." className={s.username}
                onChange={e => props.setName(e.target.value)} value={props.username} />
            <input type="password" placeholder="Password..." className={s.password}
                onChange={e => props.setPassword(e.target.value)} value={props.password} />
            <button className={s.authBtn}
                    onClick={
                        async () => {
                            const request = await services.login(props.username, props.password);
                            const result = await request.json();
                            if (result.auth_token) {
                                localStorage.setItem('token', JSON.stringify(result.auth_token));
                                localStorage.setItem('username', JSON.stringify(props.username));
                                localStorage.setItem('password', JSON.stringify(props.password));
                                props.setName('');
                                props.setPassword('');
                                navigate('/cars/');
                                window.location.reload();
                            } else {
                                console.log(result);
                            }
                        }
                    }>
                Login
            </button>
        </div>
    );
}

export {Login};