import PeoplePage from '@containers/people/PeoplePage';
import HomePage from '@components/HomePage/HomePage';
import NotFoundPage from './../containers/notFoundPage/NotFoundPage'
import Person from '../containers/PersonPage/Person';
import FavoritePage from '../containers/favoritePage/FavoritePage';
import SearchPage from '../containers/SearchPage/SearchPage';
import ErrorMesseg from '../components/ErrorMesseg.js/ErrorMesseg';

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/people',
        exact: true,
        component: PeoplePage,
    },
   
    {
        path: '*',
        exact: false,
        component: NotFoundPage,
    },
    {
        path: '/people/:id',
        exact: false,
        component: Person,
    },
    {
        path: '/favorites',
        exact: true,
        component: FavoritePage,
    },
    {
        path: '/search',
        exact: true,
        component: SearchPage,
    },
    {
        path: '/fail',
        exact: true,
        component: ErrorMesseg,
    },

]



export default routesConfig;