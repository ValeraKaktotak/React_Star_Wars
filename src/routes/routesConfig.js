import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeoplePage";
import NotFoundPage from "../containers/NotFoundPage";
import PersonPage from "../containers/PersonPage";


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
        path: "/people/:id",
        component: PersonPage
    },
    {
        path: "*",
        component: NotFoundPage
    }
]

export default routesConfig