import s from './AuthComponent.module.css';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {services} from '../../services/carsServices.service.js';
import {SignUp} from './SignUp';
import {Login} from './Login';

const AuthComponent = (props) => {
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [signUp, setStatus] = useState('false');
    const [login, setLogin] = useState('false');

    let html = '';

    if (signUp === 'false') {
        html = <SignUp username={username} setName={setName}
                       password={password} setPassword={setPassword}
                       email={email} setEmail={setEmail}
                       setStatus={setStatus} />
    } else {
        html = <Login username={username} setName={setName}
                      password={password} setPassword={setPassword} />
    }

    return html;
};

export {AuthComponent};
