import Home from './views/App';
import Child from './views/Child';
import Wrong from './views/Wrong';
import Bridge from './views/Bridge';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    }, {
        path: '/child',
        component: Child,
    }, {
        // 404页面
        component: Wrong,
    }
]

export default routes;
