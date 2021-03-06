import RouterHome from '../components/router/RouterHome';
import RouterPage1 from '../components/router/RouterPage1';
import RouterPage1DetailA from '../components/router/RouterPage1DetailA';
import RouterPage2 from '../components/router/RouterPage2';
import RouterUrlParameter from '../components/router/RouterUrlParameter';

export const routerRoutes = [
  {
    path: '/',
    exact: true,
    children: <RouterHome />,
  },
  {
    path: '/page1',
    exact: true,
    children: <RouterPage1 />,
  },
  {
    path: '/page1/detailA',
    exact: false,
    children: <RouterPage1DetailA />,
  },
  {
    path: '/page2',
    exact: true,
    children: <RouterPage2 />,
  },
  {
    path: '/page2/:id',
    exact: false,
    children: <RouterUrlParameter />,
  },
];
