import {Route, Routes} from "react-router-dom";
import PeoplePage from "../PeoplePage";
import style from './App.module.css'

const App = () => {
    return (
        <div className={style.App}>
            <Routes>
                <Route path="/" element={<PeoplePage />}/>
            </ Routes>
        </div>
    );
}

export default App;
