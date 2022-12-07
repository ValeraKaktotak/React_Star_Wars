import HomePage from "../containers/HomePage";
import PeoplePage from "../containers/PeoplePage";
import NotFoundPage from "../containers/NotFoundPage";
import PersonPage from "../containers/PersonPage";
import FavoritePage from "../containers/FavoritePage";
import SearchPage from "../containers/Searchpage";


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
        path: "/search",
        component: SearchPage
    },
    {
        path: "/favorite",
        component: FavoritePage
    },
    {
        path: "*",
        component: NotFoundPage
    }
]

export default routesConfig