import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {PageNotFound} from './PageNotFound'
const CarsRoutes = (props) => {

    const token = JSON.parse(localStorage.getItem('token')) || '';
    const username = JSON.parse(localStorage.getItem('username')) || '';
    const password = JSON.parse(localStorage.getItem('password')) || '';
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<props.home token={token}
                                            username={username}
                                            password={password} />} path='/cars/' />
                <Route element={<props.detail />} path='/cars/:id' />
                <Route element={<props.auth />} path='/auth/' />
                <Route element={<PageNotFound />} path='*' />
            </Routes>
        </BrowserRouter>
    );
}

export {CarsRoutes};