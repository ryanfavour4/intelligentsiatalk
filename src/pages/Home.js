import { useState, useEffect } from "react";

import Loadscreen from "../components/Loadscreen";

import Header from "../assets/Header";
import Wordingswall from "../assets/Wordingswall";
import InnovativeWord from "../assets/InnovativeWord";
import Aboutusvidexp from "../assets/Aboutusvidexp";
import Subscribemail from "../components/Subcribemail";

const Home = () => {

    let [loadscreen, setLoadscreen] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoadscreen(false)
        },4000)
    },[])

    return (
        <div className="intelligentsia-talk">
            <Loadscreen loadscreen={loadscreen}/>
            <Header/>
            <InnovativeWord/>
            <Wordingswall/>
            <Aboutusvidexp/>
            <Subscribemail/>
        </div>
    )
}

export default Home; 