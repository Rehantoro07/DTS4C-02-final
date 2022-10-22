import { Button, Card, CardActions, CardMedia, Typography, CardContent, Chip, Skeleton } from '@mui/material';
import { Container } from '@mui/system';

function Skeletonn() {
  return (
    <Container sx={{
      width: '360px'
    }}>
      <Skeleton variant="rounded" width={'100%'} height={'200px'} sx={{
        marginTop: '3rem'
      }} />
      <Skeleton variant="rounded" width={'40%'} height={'1.2rem'} sx={{ marginTop: '1rem' }} />
      <Skeleton variant="rounded" width={'100%'} height={'1.1rem'} sx={{ marginTop: '1.5rem' }} />
      <Skeleton variant="rounded" width={'100%'} height={'1.1rem'} sx={{ marginTop: '.5rem' }} />
      <Skeleton variant="rounded" width={'100%'} height={'1.1rem'} sx={{ marginTop: '.5rem' }} />
    </Container>
  )
}

export default Skeletonn

