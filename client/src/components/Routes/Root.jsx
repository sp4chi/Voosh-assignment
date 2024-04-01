import { Outlet, useLocation } from 'react-router-dom';

import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';

const Root = () => {
  const location = useLocation();
  if (location.pathname === '/') {
    return (
      <>
        <Outlet />
      </>
    );
  }

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Outlet />
    </>
  );
};

export default Root;
