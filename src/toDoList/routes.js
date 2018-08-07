import Home from './views/App';
import Child from './views/Child';
import Login from './views/Login';
import Wrong from './views/Wrong';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/child',
        component: Child,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        // 404页面
        component: Wrong,
    }
]

export default routes;
