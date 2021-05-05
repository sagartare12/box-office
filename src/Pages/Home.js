import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
 const Home = () => {

    const [ input , setInput ] = useState('');


    const onSearch = () =>{
        // http://api.tvmaze.com/search/shows?q=girl
        
        fetch(`http://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json()).then(result =>
        console.log(result));
    };

    const toInputChange = (ev) => {
        setInput(ev.target.value);
        console.log(ev.target.value);
    };

    const onKeyDown = (ev) => {
        if(ev.keyCode === 13 ){
            onSearch();
        }
    }
    
    return (
        <MainPageLayout>
            <input type="text" onChange={toInputChange} onKeyDown={onKeyDown} value={input} />
            <button type="button" onClick={onSearch} >Search</button>
        </MainPageLayout>
    )
}
export default Home