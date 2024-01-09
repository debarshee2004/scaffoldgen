import React, { useContext, useEffect, useState } from 'react'
import CryptoContext from '../CryptoContext';
import axios from 'axios';
import { HistoricalChart } from '../Config/api';
import { useParams } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CircularProgress, createTheme } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement,LinearScale, Title, CategoryScale } from 'chart.js';
import {chartDays} from '../Config/data';
import SelectBtn from './SelectBtn';



Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

function CoinGraph({coin}) {
    const {currency} = useContext(CryptoContext);
    const [days,setDays] = useState();
    const [historicalData,setHistoricalData] = useState([]);
    const {id} = useParams();
    // console.log(coin)
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
        const fetchHistoricalData = async () =>{
            try{
                let {data} = await axios.get(HistoricalChart(id,days,currency))
                setHistoricalData(data?.prices)
            }catch(error){
                console.log(error)
            }
        }

        return ()=>{
            fetchHistoricalData()
        }
    },[days,currency,coin])

    console.log("Data",historicalData)
  return (
    <ThemeProvider theme={darkTheme}>
        {!historicalData?<CircularProgress style={{color:'gold'}} size={250} thickness={1}/>:<>
            <Line
                data={{
                    labels: historicalData?.map((coin)=>{
                        let date = new Date(coin[0]);
                        let time = date.getHours()>12 ? `${date.getHours()-12}:${date.getMinutes()} PM` : `${date.getHours()}:${date.getMinutes()} AM`

                        return days === 1 ? time : date.toLocaleString()
                    }),
                    datasets: [{data:historicalData?.map((coin)=>coin[1]),
                                label:`Price (Past ${days} Days) in ${currency}`,
                                borderColor:'gold'
                    }],
                    
                }}
                options={{
                    elements:{
                        point:{
                            radius:1
                        }
                    }
                }}
                
            />
            <div style={{display:'flex',justifyContent:'space-around',width:'100%',marginTop:'40px'}}>
                {chartDays.map((button)=>{
                    return(
                        <SelectBtn selected={button.value === days} onClick={()=>{setDays(button.value)}}>{button.label}</SelectBtn>
                    )
                })}
            </div>
        </>}
    </ThemeProvider>
  )
}

export default CoinGraph;