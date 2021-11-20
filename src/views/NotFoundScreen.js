import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loginButton: {
    textDecoration: 'none',
  },
}));

export default function NotFoundScreen() {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component='main' sx={{ mt: 8 }} maxWidth='sm'>
        <Typography variant='h2' component='h1' gutterBottom sx={{ mb: 8 }}>
          404 - Not Found!
        </Typography>
        <Link to='/' className={classes.loginButton}>
          <Button variant='outlined' color='error'>
            Go Home
          </Button>
        </Link>
      </Container>
    </Box>
  );
}
