import { Paper, Typography } from '@mui/material';
// import { cardData } from '../../data/event-data';
import OrderCard from '../UI/OrderCard';
import { Box } from '@mui/system';

const GetOrders = () => {
  return (
    <section className='header-container'>
      <Paper
        elevation={5}
        className='h-[15rem] bg-gradient-to-r from-violet-200 to-pink-200 rounded-none flex items-center justify-center '>
        <Typography
          className='text-center font-bold bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent'
          variant='h3'
          gutterBottom>
          Orders
        </Typography>
      </Paper>
      {/* <Box className=" py-20 grid grid-cols-3 gap-10 ">
    {cardData.map((item) => (
      <EventsCard
        id={item.id}
        key={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
        venue={item.venue}
      />
    ))}
  </Box> */}
    </section>
  );
};

export default GetOrders;
