import React, { useState } from 'react'
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout'
import { CustomRadio } from '../components/show/CustomRadio';
import ShowGrid from '../components/show/ShowGrid';
import {apiGet} from '../misc/config'
import { useLastQuery } from '../misc/custom-hooks'
import { RadioInputWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';
 const Home = () => {

    const [ input , setInput ] = useLastQuery();
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
            <SearchInput type="text" placeholder="Search for something" onChange={toInputChange} onKeyDown={onKeyDown} value={input} />
            
            <RadioInputWrapper>
                <div>
                    <CustomRadio 
                    label="shows"
                    id="for-shows"                 
                    value="shows" 
                    checked={isSearchShows}
                    onChange={onRadioChange}
                    />
            
                </div>
                <div>
                    
                     <CustomRadio 
                    label="actor"
                    id="for-actor"                 
                    value="actor" 
                    checked={!isSearchShows}
                    onChange={onRadioChange}
                    />
                </div>
            </RadioInputWrapper>
            <SearchButtonWrapper>

            <button type="button" onClick={onSearch} >
                Search
            </button>
            </SearchButtonWrapper>
            {renderResult()}
        </MainPageLayout>
    )
}
export default Home