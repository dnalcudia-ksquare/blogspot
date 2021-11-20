import * as React from 'react';
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';
import { useParams, useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import loadingImg from '../assets/loading.jpg';

const useStyles = makeStyles((theme) => ({
  loginButton: {
    textDecoration: 'none',
  },
}));

export default function PostView() {
  const [post, setPost] = useState({
    id: 0,
    title: '',
    body: '',
    userId:'',
  });
    const [loading, setLoading] = useState(false);
    const params = useParams<{ id: string }>();
  const history = useHistory();

  const handleReturnToDashboard = () => {
    history.push('/dashboard');
  };

  useEffect(() => {
          setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(function (response) {
        setPost(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  
  const classes = useStyles();
  
  //if (!post.id) return <Redirect to='/dashboard' />;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      {loading ? (
          <>
            <img src={loadingImg} alt='stressed_monkey' width='150px' />
          </>
        ) : (
      <Container component='main' sx={{ mt: 8 }} maxWidth='sm'>
        <Typography variant='h2' component='h1' gutterBottom>
          {post.title}
        </Typography>
        <Typography variant='h6' component='h2' gutterBottom sx={{ mb: 8 }}>
          {post.body}
        </Typography>
        <Link to='/dashboard' className={classes.loginButton}>
                <Button
        style={{ marginTop: '2rem' }}
            color='success'
            variant='outlined'
        onClick={handleReturnToDashboard}
      >
        Return to dashboard
      </Button>
        </Link>
      </Container>
        )};
    </Box>
  );
}
