import {Route, Routes} from "react-router-dom";
import Header from "../../components/Header";
import routesConfig from "../../routes/routesConfig";
import style from './App.module.css'


const App = () => {
    return (
        <div className={style.App}>
            <Header />
            <Routes>
                {routesConfig.map((element,index)=>(
                    <Route
                        key={index}
                        path={element.path}
                        element={element.component()}
                    />
                ))}
            </ Routes>
        </div>
    );
}

export default App;
