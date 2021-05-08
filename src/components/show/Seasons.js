import React from 'react'
import { SeasonsList, SeasonsWrapper } from './Seasons.styled'

 const Seasons = ( {seasons} ) => {
    return (
        <SeasonsWrapper>
        <p>
            Seasons in total : {' '}
            <span>
                {seasons.reduce((acc , season) => acc + season.episodeOrder,0)}
            </span>
        </p>
        <SeasonsList>
            {seasons.map(season => (
                <div className="seasons-item" key={season.id}>
                    <div className="left">
                        <p>Seasons {season.number}</p>
                        <p>
                            Episodes : <span>{season.episodeOrder}</span>
                        </p>
                    </div>
                    <div className="right">
                        Aired:{' '}
                        <span>
                            {season.premiereDate} - {season.endDate}
                        </span>
                    </div>
                </div>






            ))}
            
        </SeasonsList>
        </SeasonsWrapper>
        
    )
}
export default Seasons