import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Routes/Home';
import Root from './components/Routes/Root';
import Error from './components/Routes/Error';
import GetOrders from './components/orders/GetOrders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/orders/get-orders',
          element: <GetOrders />,
        },
        {
          path: '/auth/login-user',
          element: <Login />,
        },
        {
          path: '/auth/add-user',
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
