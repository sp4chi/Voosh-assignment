import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Main from '../Layout/Main';
import { useState } from 'react';
import AddOrder from '../orders/AddOrder';
import { Box, Paper } from '@mui/material';

const Home = () => {
  const [showform, setShowForm] = useState(false);

  const handleAddOrder = () => {
    setShowForm(!showform);
  };
  return (
    <>
      <Header className={` `}>
        <Navbar />
      </Header>
      <Main className=''>
        <Box className='w-full flex justify-center gap-6 '>
          <button
            className='p-2 w-[10rem] h-10 mt-2 bg-emerald-500 text-white rounded-md '
            onClick={handleAddOrder}>
            Add Order
          </button>
        </Box>
        <div className=''>{showform ? <AddOrder /> : ''}</div>
      </Main>
    </>
  );
};

export default Home;
