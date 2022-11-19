import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeoplePage";
import NotFoundPage from "../containers/NotFoundPage";


const routesConfig = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/people",
        component: PeoplePage
    },
    {
        path: "*",
        component: NotFoundPage
    }
]

export default routesConfig