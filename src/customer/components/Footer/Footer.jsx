import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const Footer = () => {
  return (
    <div>
      <Grid className='bg-black text-white text-center mt-10' container sx={{bgcolor:"black", color:"white", py:3}}>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>About</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Blog</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Press</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Jobs</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Partners</button>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>{" "}About</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Blog</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Press</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Jobs</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Partners</button>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>About</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Blog</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Press</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Jobs</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Partners</button>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'>Company</Typography>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>About</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Blog</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Press</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Jobs</button>
            </div>
            <div>
              <button className='pb-5' variant='h6' gutterBottom>Partners</button>
            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
