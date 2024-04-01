import { useRouteError } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Header from '../Layout/Header';
import Main from '../Layout/Main';

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main className={`text-2xl text-azure-500 `}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Main>
    </>
  );
};

export default Error;
