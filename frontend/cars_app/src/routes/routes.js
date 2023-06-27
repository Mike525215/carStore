import {BrowserRouter, Routes, Route} from 'react-router-dom';

const CarsRoutes = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<props.home />} path='/cars/'/>
                <Route element={<props.detail />} path='/cars/:id'/>
                <Route element={<div>Page Not Found</div>} path='*'/>
            </Routes>
        </BrowserRouter>
    );
}

export {CarsRoutes};