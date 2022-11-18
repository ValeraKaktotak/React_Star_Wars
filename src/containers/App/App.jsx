import {Route, Routes} from "react-router-dom";
import PeoplePage from "../PeoplePage";
import HomePage from "../HomePage";
import style from './App.module.css'

const App = () => {
    return (
        <div className={style.App}>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/people" element={<PeoplePage />}/>
            </ Routes>
        </div>
    );
}

export default App;
