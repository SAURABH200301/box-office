import React, { useState } from 'react';
import ActorsGrid from '../components/Actors/ActorsGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowsGrid from '../components/Shows/ShowsGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

function Home() {
    const [input, setInput] = useLastQuery();
    const [results, setResults] = useState(null);
    const [searchOption,setSearchOption]=useState('shows');

    const isShowsSearch = searchOption === 'shows';

    const onSearch = () => {
        apiGet(`/search/${searchOption}?q=${input}`).then(result => {
            setResults(result);
        });
    };

    const onInputChange = ev => {
        setInput(ev.target.value);
    };

    const onKeyDown = ev => {
        if (ev.keyCode === 13) {
            onSearch();
        }
    };

    const onRadioChange=(ev)=>{
        setSearchOption(ev.target.value);
    }

    // eslint-disable-next-line no-console
    // console.log(searchOption);

    const renderResults = () => {
        if (results && results.length === 0) {
            return <div>No results</div>;
        }

        if (results && results.length > 0) {
            return results[0].show
            ?<ShowsGrid data={results}/>
            :<ActorsGrid data={results}/>
            
        }

        return null;
    };

    return (
        <MainPageLayout>
            <SearchInput
                type="text"
                placeholder='Search for Something'
                onChange={onInputChange}
                onKeyDown={onKeyDown}
                value={input} />

            <RadioInputsWrapper>
                <div>

                    <CustomRadio
                       label="Shows"
                       id='shows-search' 
                       checked={isShowsSearch} 
                       value="shows" 
                       onChange={onRadioChange}
                    
                    />
                </div>

                <div>

                <CustomRadio
                       label="Actors"
                       id='actors-search' 
                       checked={!isShowsSearch} 
                       value="people" 
                       onChange={onRadioChange}
                    
                    />
                </div>
            </RadioInputsWrapper>

            <SearchButtonWrapper>
            <button type="button" onClick={onSearch}>
                Search
            </button>
            </SearchButtonWrapper>
            {renderResults()}
        </MainPageLayout>
    );
}

export default Home;
