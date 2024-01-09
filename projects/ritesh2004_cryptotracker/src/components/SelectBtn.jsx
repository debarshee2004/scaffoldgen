import React from 'react';
import './SelectBtn.css';

function SelectBtn({children,selected,onClick}) {
  return (
    <div className='selectBtn' style={{backgroundColor:selected?'gold':'',fontWeight:selected?'800':'300',color:selected?'black':''}} onClick={onClick}>{children}</div>
  )
}

export default SelectBtn