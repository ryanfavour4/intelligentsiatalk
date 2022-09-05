import { useState, useEffect } from "react";

import Loadscreen from "../components/Loadscreen";

import Header from "../assets/Header";
import Section1 from "../assets/Section1";
import Wordingswall from "../assets/Wordingswall";
import InnovativeWord from "../assets/InnovativeWord";

const Home = () => {

    let [loadscreen, setLoadscreen] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoadscreen(false)
        },7000)
    },[])

    return (
        <div className="intelligentsia-talk">
            <Loadscreen loadscreen={loadscreen}/>
            <Header/>
            <Section1/>
            <Wordingswall/>
            <InnovativeWord/>
            <Wordingswall/>
        </div>
    )
}

export default Home; 