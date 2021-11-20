import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  loginButton: {
    textDecoration: 'none',
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.setItem('authorized', '0');
    history.push('/login');
    history.go(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              Daniel Alcudia
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='text.secondary'
              paragraph
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              debitis fugit cum sit quia placeat quo fugiat qui quos vel amet
              sapiente sint deleniti provident dolor architecto, doloribus
              dolorum harum!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction='row'
              spacing={2}
              justifyContent='center'
            >
              {localStorage.getItem('authorized') === '0' ? (
                <>
                  <Link to='/login' className={classes.loginButton}>
                    <Button variant='outlined'>Sign in</Button>
                  </Link>
                </>
              ) : (
                <Button variant='outlined' onClick={handleLogout}>
                  Sign out
                </Button>
              )}
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
