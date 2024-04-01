import { Link, useSearchParams } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className={`flex justify-around items-center h-32 text-3xl text-gray-50 py-4 font-bold bg-orange-900 `}>
      <ul className='w-5/12 flex justify-around '>
        <li>
          <Link to='/' className=''>
            Home
          </Link>
        </li>
        <li>
          <Link to='/orders/get-orders' className=''>
            Orders
          </Link>
        </li>
        <li>
          <Link to='/auth/login-user' className=''>
            Login
          </Link>
        </li>
        <li>
          <Link to='/auth/add-user' className=''>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
