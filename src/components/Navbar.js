import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: 'black',
  },
  navlinks: {
    display: 'flex',
  },
  logo: {
    flexGrow: '1',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    marginRight: theme.spacing(10),
    '&:hover': {
      borderBottom: '1px solid white',
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.setItem('authorized', '0');
    history.go(0);
  };

  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar className={classes.navbar}>
        <Typography variant='h4' className={classes.logo}>
          My Blog
        </Typography>
        <div className={classes.navlinks}>
          <Link to='/' className={classes.link}>
            Home
          </Link>
          {localStorage.getItem('authorized') === '0' ? (
            <>
              <Link to='/login' className={classes.link}>
                Login
              </Link>
            </>
          ) : (
            <Link
              to='/dashboard'
              className={classes.link}
              onClick={handleLogout}
            >
              Logout
            </Link>
          )}
          <Link to='/dashboard' className={classes.link}>
            Posts
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
