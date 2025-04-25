import React, { useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      textAlign="center"
      justifyContent="center"
    >
      <Container maxWidth="md">
        <Typography align="center" variant="h1" mb={4}>
          Test is Submitted Successfully!!!
        </Typography>
        <Typography align="center" variant="h4" mb={4}>
          You can safely close the window now.
        </Typography>
        <Button color="primary" variant="contained" component={Link} to="/" disableElevation>
          Go Back to Home
        </Button>
      </Container>
    </Box>
  );
};

export default Success;
