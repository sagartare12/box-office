import React, { useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from '../misc/config'
 const Home = () => {

    const [ input , setInput ] = useState('');
    const [results , setResults] = useState(null);

    const onSearch = () =>{
        // http://api.tvmaze.com/
        
      apiGet(`search/shows?q=${input}`).then(result => {
        setResults(result);
        console.log(result);
    });
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
    

     const renderResult = () => {
        if(results && results.length === 0){
            return <div>No result found</div>
        }
        if(results && results.length > 0){
            return (
                <div>
                {results.map((item) => <div key={item.show.id}>{item.show.name}</div>)}
                </div>
            )
        }
        return (null);
     }
    return (
        <MainPageLayout>
            <input type="text" onChange={toInputChange} onKeyDown={onKeyDown} value={input} />
            <button type="button" onClick={onSearch} >Search</button>
            {renderResult()}
        </MainPageLayout>
    )
}
export default Home