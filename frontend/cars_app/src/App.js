import './App.css';
import {Home} from './components/Home/Home';
import {CarsRoutes} from './routes/routes';
import {CarDetail} from './components/CarDetail/CarDetail';
import {AuthComponent} from './components/AuthComponent/AuthComponent';

const App = () => {
    return (
        <>
            <CarsRoutes home={Home} detail={CarDetail} auth={AuthComponent}/>
        </>
    );
}

export {App};
