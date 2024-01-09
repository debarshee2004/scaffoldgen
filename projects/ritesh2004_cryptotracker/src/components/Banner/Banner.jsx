import { Container, Typography } from '@mui/material';
import React from 'react';
import './Banner.css';
import Carousel from '../Carousel';


function Banner() {
  return (
    <div className='banner'>
        <Container className='bannerContent'>
            <div className="tagline">
                <Typography variant='h2' style={{fontFamily:'Montserrat',fontWeight:'bold',marginBottom:'15px'}}>
                    Crypto Tracker
                </Typography>
                <Typography variant='subtitled2' style={{textTransform:'capitalize',fontFamily:'montserrat',color:'darkgrey'}}>
                    Get all the information about your fav Crypto
                </Typography>
            </div>
            <Carousel/>
        </Container>
    </div>
  )
}

export default Banner