import { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const AddOrder = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userId: '11k1q1112121',
      title: data.get('title'),
      subTotal: data.get('subTotal'),
      phoneNumber: data.get('phoneNumber'),
    });
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1.5rem',
      }}>
      <Typography variant='h5' component='h2' gutterBottom>
        My Form
      </Typography>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
        onSubmit={handleSubmit}>
        <TextField
          name='title'
          label='Title'
          variant='outlined'
          style={{ marginBottom: '1rem', width: '100%' }}
        />
        <TextField
          name='subTotal'
          label='Subtotal'
          variant='outlined'
          style={{ marginBottom: '1rem', width: '100%' }}
        />
        <TextField
          name='phoneNumber'
          label='Phone Number'
          variant='outlined'
          style={{ marginBottom: '1rem', width: '100%' }}
        />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          style={{ marginTop: '1rem' }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddOrder;
