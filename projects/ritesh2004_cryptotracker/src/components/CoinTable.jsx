import { Container, LinearProgress, Pagination, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Typography, createTheme } from '@mui/material'
import Table from '@mui/material/Table';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CoinList } from '../Config/api';
import CryptoContext from '../CryptoContext';
import './Table1.css';
import { useNavigate } from 'react-router-dom';

function CoinTable() {
    const [loading,setLoading] = useState(false);
    const [coinArr,setCoinArr] = useState([]);
    const [search, setSearch] = useState("");
    const [page,setPage] = useState(1)

    const {currency,symbol} = useContext(CryptoContext);

    const navigate = useNavigate();


    useEffect(()=>{
      const fetchCoins = async () => {
        try{
          setLoading(true);
          let {data} = await axios.get(CoinList(currency));
          // console.log(data)
          setCoinArr(data)
          setLoading(false)
        }catch(error){
          console.log("Error",error)
        }
      }
      return () => {
        fetchCoins()
      }
    },[currency])

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

    const handleSearch = () =>{
      return (
        coinArr.filter((coin)=>
          (coin.name?.toLowerCase().includes(search) || coin.symbol?.toLowerCase().includes(search))
        )
        )
    }
  return (
    <ThemeProvider theme={darkTheme}>
    <Container>
    <div className='table-con' style={{textAlign:'center'}}>
        <Typography variant='h4' style={{fontFamily:'Montserrat',marginBottom:'20px',marginTop:'20px'}}>
            Cryptocurrency Prices
        </Typography>
        <input type='text' id='search' value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder='Search Crypto'/>

        <TableContainer style={{width:'90%',marginBottom:'20px'}}>
            {loading?<LinearProgress style={{backgroundColor:'gold'}}/>:<>
            <Table>
                <TableHead style={{backgroundColor:'#EEBC1D'}}>
                    <TableRow>
                        {['Coin','Price','24h Change','Market Cap'].map((head)=>{
                            return(
                            <TableCell
                            style={{color:'black',
                                    fontFamily:'Montserrat',
                                    fontWeight:'700'}} key={head} align={head==='Coin'?" ":"right"}>{head}</TableCell>)
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {handleSearch()
                    .slice((page-1)*10,(page-1)*10+10)
                    .map((row)=>{
                      let profit = row.price_change_percentage_24h > 0;
                      return(
                        <TableRow onClick={()=>navigate(`/coin/${row.id}`)} key={row.id} className='row'>
                            <TableCell component='th' scope='row' style={{display:'flex',gap:'15px'}}>
                              <img src={row?.image} alt={row?.name} height='50' width='50' style={{marginBottom:'10px'}}/>
                              <div style={{display:'flex',flexDirection:'column',fontWeight:'bold',fontFamily:'Montserrat',color:'white'}}>
                                <span style={{textTransform:'uppercase',fontSize:'22'}}>{row.symbol}</span>
                                <span style={{color:'darkgray'}}>{row.name}</span>
                              </div>
                            </TableCell>

                            <TableCell
                            align='right'
                            scope='row'
                            style={{color:'white',fontFamily:'Montserrat',fontWeight:'bold'}}>
                                {symbol} <span> </span> {row?.current_price?.toFixed(2)}
                            </TableCell>
                            
                            <TableCell
                            align='right'
                            style={{color:profit>0?'green':'red', fontWeight:'500'}}>
                                {profit && "+"}
                                {row?.price_change_percentage_24h?.toFixed(2)}%
                            </TableCell>

                            <TableCell
                            align='right' style={{color:'white',fontWeight:'bold'}}>
                              {symbol} {row?.market_cap?.toString().slice(0,-6)} M 
                            </TableCell>
                        </TableRow>
                      )
                    })}
                </TableBody>
            </Table>
            </>}
        </TableContainer>
        <Pagination
        count={(handleSearch()?.length/10).toFixed(0)}
        className="pagination"
        variant="outlined"
        color="primary"
        onChange={(_,value)=>{
          setPage(value)
          window.scroll(0,450)}}>
        </Pagination>
    </div>
    </Container>
    </ThemeProvider>
  )
}

export default CoinTable;