import {BrowserRouter, Routes, Route} from 'react-router-dom';

const CarsRoutes = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<props.element />} path='/cars/'/>
                <Route element={<div>Page Not Found</div>} path='*'/>
            </Routes>
        </BrowserRouter>
    );
}

export {CarsRoutes};