import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import axios from 'axios';
import loadingImg from '../assets/loading.jpg';
import { Link } from 'react-router-dom';

export default function PostCard(props) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { id, title, body, userId } = props;

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(function (response) {
        setUser(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <img src={loadingImg} alt='stressed_monkey' width='150px' />
        </>
      ) : (
        <Card key={id} sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'black' }} aria-label='recipe'>
                {id}
              </Avatar>
            }
            action={
              <Link to={`/dashboard/${id}`}>
                <IconButton aria-label='settings'>
                  <ReadMoreIcon />
                </IconButton>
              </Link>
            }
            title={title}
            subheader={user.name}
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              {body}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
