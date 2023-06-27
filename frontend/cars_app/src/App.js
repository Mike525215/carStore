import './App.css';
import {Home} from './components/Home/Home';
import {CarsRoutes} from './routes/routes';

const App = () => {
    return (
        <>
            <CarsRoutes element={Home} />
        </>
    );
}

export {App};
