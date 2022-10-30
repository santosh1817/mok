import React, { useEffect } from 'react';
import './App.css';
//import Navbar from './components/Navbar';
import axios from 'axios'

function App() {
    const test = async () => {
        const res = await axios.get('http://localhost:3005/booking/all')
        console.log(res)
    }
    useEffect(() => {

        test()



    }, [])


    return (
        <>
            <h1>hello world</h1>


        </>
    );
}

export default App;