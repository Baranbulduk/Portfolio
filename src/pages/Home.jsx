import React from 'react';
import { Link } from 'react-router-dom';
import FetchData from '../components/Fetchdata/FetchData';

function Home(){
    return(
    <>
    <h1>Home</h1>
    <FetchData />
    <Link to="/about">
        <button>About</button>
      </Link>
    </>
    );
}

export default Home;