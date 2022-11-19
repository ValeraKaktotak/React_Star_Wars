import {NavLink, Route, Routes} from "react-router-dom";
import PeoplePage from "../PeoplePage";
import HomePage from "../HomePage";
import style from './App.module.css'
import routesConfig from "../../routes/routesConfig";

const App = () => {
    return (
        <div className={style.App}>
            <div className="header__text">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/people">People</NavLink>
            </div>
            <Routes>
                {routesConfig.map((element,index)=>(
                    <Route
                        key={index}
                        path={element.path}
                        element={element.component()}
                    />
                ))}
                {/*<Route path="/" element={<HomePage />}/>*/}
                {/*<Route path="/people" element={<PeoplePage />}/>*/}
            </ Routes>
        </div>
    );
}

export default App;
