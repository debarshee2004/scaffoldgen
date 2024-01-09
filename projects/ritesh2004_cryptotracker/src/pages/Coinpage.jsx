import React, { useContext, useEffect, useState } from 'react'
import CryptoContext from '../CryptoContext';
import axios from 'axios';
import { SingleCoin } from '../Config/api';
import { useParams } from 'react-router-dom';
import './Coinpage.css';
import { LinearProgress, ThemeProvider, Typography, createTheme } from '@mui/material';
import CoinGraph from '../components/CoinGraph';


function Coinpage() {
  const { id } = useParams();
  const {currency,symbol} = useContext(CryptoContext);
  const [coin,setCoins] = useState([]);
  const [loading,setLoading] = useState(false);

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#00bcd4',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  useEffect(()=>{
    const fetchCoin = async () =>{
      try{
        setLoading(true)
        let {data} = await axios.get(SingleCoin(id))
        // console.log(data)
        setCoins(data)
        setLoading(false)
      }catch(error){
        console.log(error)
      }
    }
    // eslint-disable-next-line
    return () =>{
      fetchCoin()
    }
  },[currency])

  // let Element = document.createElement('p')
  // Element += "<span>description<span>"
  // let parent = document.getElementById('desc')
  // parent.insertAdjacentElement('beforeend', Element)

  return (
    <ThemeProvider theme={darkTheme}>
      {loading?<LinearProgress style={{backgroundColor:'gold'}}/>:<>
    <div className='coinpage'>
      <div className='sidebar'>
          <img
          src={coin?.image?.large}
          alt={coin?.name}
          height='200px'
          style={{marginBottom:'20px'}}
          />
          <Typography variant='h3' className='coin-title' style={{fontFamily:'Montserrat',fontWeight:'bold'}}>
            {coin?.name}
          </Typography>
          <div id="desc">
            <span>{coin?.description?.en?.split('.')?.slice(0,6)}</span>
          </div>
          <div className="coin-market">
            <span style={{display:'flex',marginBottom:'20px',fontFamily:'Montserrat'}}>
              <Typography variant='h5' style={{fontFamily:'Montserrat',fontWeight:'bold'}}>
                Rank: {" "}
              </Typography>
              &nbsp; &nbsp;
              <Typography variant='h5'>
                {coin?.market_cap_rank}
              </Typography>
            </span>
            <span style={{display:'flex',marginBottom:'20px',fontFamily:'Montserrat'}}>
              <Typography variant='h5' style={{fontFamily:'Montserrat',fontWeight:'bold'}}>
                Current Price: {" "}
              </Typography>
              &nbsp; &nbsp;
              <Typography variant='h5'>
              {symbol}
                {coin?.market_data?.current_price[currency]?.toFixed(2)}
              </Typography>
            </span>

            <span style={{display:'flex',marginBottom:'20px',fontFamily:'Montserrat'}}>
              <Typography variant='h5' style={{fontFamily:'Montserrat',fontWeight:'bold'}}>
                Market Cap: {" "}
              </Typography>
              &nbsp; &nbsp;
              <Typography variant='h5'>
              {symbol}
                {coin?.market_data?.market_cap[currency]?.toString()?.slice(0,-6)}M
              </Typography>
            </span>
            </div>
        </div>

      <div className='coin-info'>
          <CoinGraph coin={coin.id} />
      </div>
    </div>
            </>}
    </ThemeProvider>
  )
}

export default Coinpage;