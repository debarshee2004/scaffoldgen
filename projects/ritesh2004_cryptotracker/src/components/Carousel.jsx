import React, { useContext, useEffect, useState } from 'react';
import './Carousel.css';
import AliceCarousel from 'react-alice-carousel';
import CryptoContext from '../CryptoContext';
import { TrendingCoins } from '../Config/api';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Carousel() {
  let {currency,symbol} = useContext(CryptoContext);
  const [array,setArray] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    const getTrendingCoins = async () =>{
      try{
  
        let {data} = await axios.get(TrendingCoins(currency))
        // console.log(data)
        setArray(data)
      }catch(error){
        console.log("Error",error)
      }
    }

    return () =>{
      getTrendingCoins()
    }
  },[currency])

  let items = array?.map((coin)=>{
    let price = coin?.price_change_percentage_24h>=0;
    return(
      <div onClick={()=>{navigate(`/coin/${coin?.id}`)}} className='carouselItem'>
        <img src={coin?.image} alt={coin?.symbol} height='70px' style={{marginBottom:'20px'}}/>
        <span>
          {coin?.symbol}
        &nbsp;
        <span style={{color:price>0?'green':'red'}}>{price && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%</span>
        </span>
        <span>{symbol} {coin?.current_price?.toFixed(2)}</span>
      </div>
    )
  })

  let responsive = {
    0: {
        items: 3,
    },
    320:{
      items:2
    },
    524: {
      items:3,
      itemsFit : 'contain'
    },
    1024: {
        items: 4,
        itemsFit: 'contain',
    }
  }
  

  return (
    <div className='carousel'>
        <AliceCarousel 
          mouseTracking
          autoPlay
          autoPlayInterval={1000}
          animationDuration={1500}
          responsive={responsive}
          items={items}
          infinite
          disableButtonsControls
          disableDotsControls
        />
    </div>
  )
}

export default Carousel