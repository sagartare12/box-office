import React from 'react'
import { DetailsWrapper } from './Details.styled'


 const Details = ({ status, premiered, network }) => {
    return (
        <DetailsWrapper>
            <p>
                Status: <span>{status}</span>
            </p>
            <p>
                Premiered: <span>{premiered}</span>
            </p>
        </DetailsWrapper>
    );
};
export default Details