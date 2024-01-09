import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'
import React, { useContext } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import CryptoContext from '../CryptoContext';


function Header() {

    const darkTheme = createTheme({
        palette: {
          primary :{
            main : '#fff'
          },
          type : 'dark'
        },
      });

      const navigate = useNavigate();

      const {currency,setCurrency,symbol} = useContext(CryptoContext);

    //   console.log(symbol)

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography className='title' style={{fontFamily:'Montserrat',fontWeight:'bold'}} variant='h5' onClick={()=>{navigate('/')}}>
                    Crypto Tracker
                </Typography>

                <Select variant='outlined' style={{color:'white', height:'40px',width:'100px',marginRight:'15px'}} value={currency} onChange={(e)=>{setCurrency(e.target.value)}}>
                    <MenuItem value={'usd'}>USD</MenuItem>
                    <MenuItem value={'inr'}>INR</MenuItem>
                </Select>
            </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header