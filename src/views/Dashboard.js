import { useState, useEffect, useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PostCard from '../components/PostCard';
import axios from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

const theme = createTheme();

export default function Album() {
  const [posts, setPosts] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const currentPage = useMemo(
    () => new URLSearchParams(location.search).get('page'),
    [location.search]
  );

  const [page, setPage] = useState(currentPage ? Number(currentPage) : 1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/?_page=${currentPage}`)
      .then(function (response) {
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const changePage = (newPage) => {
    if (newPage > posts.length || newPage === 0) return;

    history.push(`${location.pathname}?page=${newPage}`);
    history.go(0);

    setPage(newPage);
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
              Posts
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <PostCard
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  userId={post.userId}
                />
              </Grid>
            ))}
          </Grid>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '2rem',
            }}
          >
            <Button
              size='small'
              color='primary'
              onClick={() => changePage(page - 1)}
            >
              Last page
            </Button>
            <Typography component='h4' variant='h4'>
              {page}
            </Typography>
            <Button
              size='small'
              color='primary'
              onClick={() => changePage(page + 1)}
            >
              Next page
            </Button>
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
}
