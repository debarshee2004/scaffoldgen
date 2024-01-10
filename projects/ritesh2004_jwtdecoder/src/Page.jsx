import React, { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
// import atob from "atob";

const Page = () => {

    const [encode, setEncode] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
    const [decode, setDecode] = useState(null);
    const [secret, setSecret] = useState("");

    // var atob = require('atob');

    let isVerified = true

    const getDecode = () => {
        let splitCode = encode.split(".");
        if (splitCode.length === 3) {
            let body = atob(splitCode[1])
            setDecode(body)
            isVerified = true;
        } else {
            setDecode("");
            console.log(decode)
        }
    }

    useEffect(() => {
        // console.log(encode)
        // setDecode(JSON.stringify(jwt_decode(encode)))
        // console.log(JSON.stringify(jwt_decode(encode)))
        // console.log(decode)
        // console.log((jwt_decode(encode)))
        getDecode()
    })




    // let isVerified = decode

    return (
        <>
            <div className="debugger">
                <span >Debugger</span>
            </div>
            <div className="container">
                <div className="encoded">
                    <span style={{ fontSize: 'x-large' }}>Encoded</span>
                    <span style={{ fontSize: 'smaller', color: '#837f7f' }}>PASTE A TOKEN HERE</span>
                    <div className="enco-con">
                        <textarea name="text-area" id="" cols="40" rows="8" onChange={(e) => { setEncode(e.target.value) }} value={encode}></textarea>
                    </div>
                </div>
                <div className="decoded">
                    <span style={{ fontSize: 'x-large' }}>Decoded</span>
                    <span style={{ fontSize: 'smaller', color: '#837f7f' }}>GET THE DECODED DATA</span>
                    <div className="deco-con">
                        <span style={{ margin: '10px' }}>PAYLOAD: <span style={{ color: '#837f7f' }}>DATA</span></span>
                        <hr />
                        <span style={{ padding: '30px', position: 'relative', top: '30px', fontWeight: '100', color: '#d63aff' }}>{decode}</span>
                        <br />
                        {decode ? (<><div className="signature-verified">
                            <span> <span> <TaskAltRoundedIcon /> </span> Signature Verified </span>
                        </div></>) : (<><div className="signature-not-verified">
                            <span> <span> <CancelOutlinedIcon /> </span> Invalid Signature </span>
                        </div></>)}


                    </div>
                </div>
            </div>
        </>
    );
}


export default Page;