import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import { Home } from '../pages/Home';
import { Deals } from '../pages/Deals';
import { Favorites } from '../pages/Favorites';
import { NotFound } from '../pages/NotFound';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/deals',
        element: <Deals />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
