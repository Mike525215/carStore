import s from './PageNotFound.module.css';
import {Link} from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <div className={s.wrapper}>
            <span className={s.errorMsg}>Page Not Found</span>
            <Link to='/cars/' className={s.link}>Cars catalog</Link>
            <Link to='/auth/' className={s.link}>Authorization page</Link>
        </div>
    );
}