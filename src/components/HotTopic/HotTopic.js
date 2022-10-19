import { Button, Card, CardActions, CardContent, CardMedia, Chip, Skeleton, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useState, useEffect } from 'react';

const HotTopic = () => {
  const [datas, setDatas] = useState(null)

  useEffect(() => {
    axios.get('https://jakpost.vercel.app/api/category/indonesia/jakarta')
      .then((res) => setDatas(res.data.featured_post))
  }, [datas])

  return (
    <>
      <Container>
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
              paddingTop: '1.5rem',
              paddingBottom: '1rem',
            }}>
              Hot Topic
            </Typography>
            <Card sx={{
              maxWidth: 1100,
              margin: '5px auto'
            }}>
              <CardMedia
                component="img"
                height="400"
                image={datas.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {datas.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {datas.headline}
                </Typography>
              </CardContent>
              <CardActions sx={{
                position: 'relative'
              }}>
                <Button variant='contained' sx={{
                  marginLeft: '5px'
                }}>More Detail</Button>
                <Chip label={`Published at ${datas.pusblised_at}`} variant="outlined" sx={{
                  position: 'absolute',
                  right: '20px'
                }} />
              </CardActions>
            </Card>
          </>
        }

      </Container>
    </>
  )
}

export default HotTopic