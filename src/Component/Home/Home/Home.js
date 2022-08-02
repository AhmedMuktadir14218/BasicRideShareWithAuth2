import React, { useEffect, useState } from 'react';
import Header from '../../Header/Header';
import NavberPractice from '../../Header/NavberPractice/NavberPractice';
import Data from '../Data/Data';
import HomeDetails from '../HomeDetails/HomeDetails';
import './Home.css'

const Home = () => {
    const [data,setData] = useState(Data);
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res=>res.json())
    //     .then(dat=>setData(dat));
    // },[])
    return(
        <div className="home">
                {/* <h1>Home {data.length}</h1> */}
                {/* {
                    data.map(homeDetail => <HomeDetails key={homeDetail.id} homeDetail={homeDetail} ></HomeDetails>)
                } */}
                <NavberPractice></NavberPractice>
                <div className="container homeDetails">
                <div className="card-deck row">
            
                {
                    data.map(homeDetail=> <HomeDetails homeDetail={homeDetail} key={homeDetail.id} ></HomeDetails>)
                }
                
                </div>
                </div>
                
        </div>
    );
};

export default Home;