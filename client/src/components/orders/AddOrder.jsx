import { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const AddOrder = () => {
  const [title, setTitle] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
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
          label='Title'
          variant='outlined'
          style={{ marginBottom: '1rem', width: '100%' }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label='Subtotal'
          variant='outlined'
          style={{ marginBottom: '1rem', width: '100%' }}
          value={subtotal}
          onChange={(e) => setSubtotal(e.target.value)}
        />
        <TextField
          label='Phone Number'
          variant='outlined'
          style={{ marginBottom: '1rem', width: '100%' }}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
