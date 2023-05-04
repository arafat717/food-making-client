/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import Cart from './Cart';

const Home = () => {
    const [datas,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/alldata')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    console.log(datas)
    return (
        <div className='mt-5 p-10'>
            {
                datas.map(dt=><Cart 
                    key={dt.id}
                    dt={dt}
                    ></Cart>)
            }
        </div>
    );
};

export default Home;