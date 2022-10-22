import { Paper, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Paper sx={{
      width: "100%",
      margin: '0 auto',
      padding: '30px 0',
      marginTop: '4rem',
      backgroundColor: '#1976D2',
      color: 'white',
      borderRadius: '0',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Typography variant='subtitle2' sx={{
        textTransform: 'uppercase'
      }}>
        Copyright © 2022 - Pair 02 Robby Vicky
      </Typography>
    </Paper>
  )
}

export default Footer