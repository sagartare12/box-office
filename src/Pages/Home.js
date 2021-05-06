import React, { useState } from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout'
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config'
 const Home = () => {

    const [ input , setInput ] = useState('');
    const [results , setResults] = useState(null);
    const [ searchOption , setSearchOption ] = useState('shows');

    const isSearchShows = searchOption === 'shows';


    const onSearch = () =>{
        // http://api.tvmaze.com/
        
      apiGet(`search/${searchOption}?q=${input}`).then(result => {
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
            return results[0].show ? <ShowGrid data={results} /> : <ActorGrid data={results} />;
                
            
        }
        return (null);
     }

     const onRadioChange = (ev) => {
         setSearchOption(ev.target.value);
     }
     console.log(searchOption);
    return (
        <MainPageLayout>
            <input type="text" placeholder="Search for something" onChange={toInputChange} onKeyDown={onKeyDown} value={input} />
            
            <div><label htmlFor="for-shows">
                Shows
                <input id="for-shows" 
                type="radio" 
                value="shows" 
                checked={isSearchShows}
                onChange={onRadioChange}/>
            </label>
            <label htmlFor="for-actor">
                Actor
                <input id="for-actor" 
                type="radio" 
                value="people" 
                checked={!isSearchShows}
                onChange={onRadioChange}/>
            </label>
            </div>
            <button type="button" onClick={onSearch} >Search</button>
            {renderResult()}
        </MainPageLayout>
    )
}
export default Home