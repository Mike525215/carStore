import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

const CarsRoutes = (props) => {
    const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')) || '');

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<props.home token={token} />} path='/cars/' />
                <Route element={<props.detail />} path='/cars/:id' />
                <Route element={<props.auth setToken={setToken} />} path='/auth/' />
                <Route element={<div>Page Not Found</div>} path='*' />
            </Routes>
        </BrowserRouter>
    );
}

export {CarsRoutes};