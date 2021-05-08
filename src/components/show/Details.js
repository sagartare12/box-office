import React from 'react'

 const Details = ({ status, premiered, network }) => {
    return (
        <div>
            <p>
                Status: <span>{status}</span>
            </p>
            <p>
                Premiered: <span>{premiered}</span>
            </p>
        </div>
    );
};
export default Details