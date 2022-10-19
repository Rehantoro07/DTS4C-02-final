import { Button, Card, CardActions, CardMedia, Typography, CardContent, Chip, Skeleton } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const Posts = () => {
  const navigate = useNavigate();

  const { state, handleFunction } = useContext(GlobalContext);

  const { link, setLink } = state;

  const { handleDetail } =
    handleFunction;

  const [datas, setDatas] = useState(null);

  useEffect(() => {
    axios.get('https://jakpost.vercel.app/api/category/indonesia/jakarta')
      .then((res) => {
        setDatas(res.data.posts)
      })
  }, [])

  return (
    <>
      <Container sx={{
        marginTop: '2rem',
      }}>
        {datas === null ?
          <>
            <Skeleton variant="rounded" width={'100%'} height={'450px'} sx={{
              marginTop: '3rem'
            }} />
            <Skeleton variant="rounded" width={'40%'} height={'2rem'} sx={{ marginTop: '1rem' }} />
            <Skeleton variant="rounded" width={'100%'} height={'1rem'} sx={{ marginTop: '1.5rem' }} />
            <Skeleton variant="rounded" width={'100%'} height={'1rem'} sx={{ marginTop: '.5rem' }} />
            <Skeleton variant="rounded" width={'100%'} height={'1rem'} sx={{ marginTop: '.5rem' }} />
          </>
          :
          <>
            <Typography sx={{
              fontSize: '2rem',
              fontWeight: '600',
              paddingTop: '1rem',
              marginLeft: '1.5rem',
              marginBottom: '1rem',
            }}>
              New Posts
            </Typography>
            <Container sx={{
              maxWidth: '800px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              gap: '2rem',
            }}>
              {datas.map((data, i) => {
                return (
                  <>
                    <div key={i}>
                      <Card sx={{
                        maxWidth: 330,
                        height: '340px',
                        position: 'relative',
                      }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={data.image}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {data.title}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{
                          width: '100%',
                          position: 'absolute',
                          bottom: '10px',
                          left: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}>
                          {/* <Link to={'/detail'}> */}
                          <Button size='small' variant='contained' sx={{
                          }} value={i} onClick={handleDetail} >More Detail</Button>
                          {/* </Link> */}
                          {/* <Chip label={`Published at ${data.pusblised_at}`} variant="outlined" sx={{
                            fontSize: '10px',
                            marginRight: '1rem'
                          }} /> */}
                        </CardActions>
                      </Card>
                    </div>
                  </>
                )
              })}
            </Container>
          </>
        }

      </Container>
    </>
  )
}

export default Posts