import axios from "axios"
import { useState, useEffect } from "react"
import { Navigate, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { Container } from "@mui/system"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Skeleton, Typography } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const DetailNews = () => {
  const navigate = useNavigate()

  const { state } = useContext(GlobalContext);
  const { link } = state;

  const [datas, setDatas] = useState(null)

  const home = () => {
    navigate('/')
  }

  useEffect(() => {
    axios.get(`${link}`)
      .then((res) => {
        setDatas(res.data.detail_post)
      })
  }, [])

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
            <Box
              sx={{
                display: 'flex',
                paddingTop: '1rem',
                alignItems: 'center',
                marginBottom: '1rem',
                gap: '2rem'
              }}>
              <Typography onClick={home} sx={{
                cursor: 'pointer'
              }}>
                <ArrowBackIosNewIcon />
              </Typography>
              <Typography sx={{
                fontSize: '2rem',
                fontWeight: '600',
                marginTop: '-.5rem'
              }}>
                Detail News
              </Typography>
            </Box>

            <Box sx={{
              maxWidth: 1100,
              margin: '5px auto',
              position: 'relative'
            }}>
              <CardMedia
                component="img"
                height="400"
                image={datas.image}
              />
              <Typography sx={{
                marginTop: '1rem',
                position: 'absolute',
                right: '0'
              }}>{`${datas.location}`}</Typography>
              <Typography sx={{
                marginTop: '2.5rem',
                position: 'absolute',
                right: '0'
              }}>{`Posted by ${datas.author}`}</Typography>
              <Typography sx={{
                marginTop: '4rem',
                position: 'absolute',
                right: '0'
              }}>{`Posted at ${datas.pusblised_at}`}</Typography>
              <CardContent sx={{
                marginTop: '6rem',
              }}>
                <Typography gutterBottom variant="h5" component="div">
                  {datas.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {datas.post_content}
                </Typography>
              </CardContent>
            </Box>
          </>
        }
      </Container>
    </>
  )
}

export default DetailNews