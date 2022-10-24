import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Skeleton from "../Skeleton/Skeleton";

const Posts = () => {
  const { state, handleFunction } = useContext(GlobalContext);

  const { search } = state
  const { handleDetail } = handleFunction;

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
            <Container sx={{
              display: 'flex',
              flexWrap: 'wrap'
            }}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </Container>
          </>
          :
          <>
            <Container sx={{
              margin: '0 auto'
            }}>
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
                gap: '2rem',
              }}>
                {datas.filter((data) => data.title.toLowerCase().includes(search)).map((data, i) => {
                  return (
                    <>
                      <Card
                        key={data.id}
                        variant="outlined"
                        sx={{
                          maxWidth: 325,
                          height: '350px',
                          position: 'relative',
                        }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={data.image}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" sx={{
                            lineHeight: '1.6rem'
                          }}>
                            {data.title}
                          </Typography>
                          <Typography variant="body2" component="p" sx={{
                            fontSize: '12px',
                            color: 'gray'
                          }}>
                            {data.pusblised_at}
                          </Typography>
                        </CardContent>
                        <CardActions sx={{
                          width: '100%',
                          position: 'absolute',
                          bottom: '10px',
                          left: '8px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}>
                          {/* <Link to={`/detail/${result3}`}> */}
                            <Button size='small' variant='contained' sx={{
                            }} value={i} onClick={handleDetail} >More Detail</Button>
                          {/* </Link> */}
                        </CardActions>
                      </Card>
                    </>
                  )
                })}
              </Container>
            </Container>
          </>
        }

      </Container>
    </>
  )
}

export default Posts