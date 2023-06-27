import './App.css';
import {Home} from './components/Home/Home';
import {CarsRoutes} from './routes/routes';
import {CarDetail} from './components/CarDetail/CarDetail';

const App = () => {
    return (
        <>
            <CarsRoutes home={Home} detail={CarDetail} />
        </>
    );
}

export {App};
