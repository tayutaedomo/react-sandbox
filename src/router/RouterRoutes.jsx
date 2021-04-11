import RouterHome from '../components/router/RouterHome';
import RouterPage1 from '../components/router/RouterPage1';
import RouterPage2 from '../components/router/RouterPage2';

export const routerRoutes = [
  {
    path: '/',
    exact: true,
    children: <RouterHome />,
  },
  {
    path: '/page1',
    exact: false,
    children: <RouterPage1 />,
  },
  {
    path: '/page2',
    exact: false,
    children: <RouterPage2 />,
  },
];
