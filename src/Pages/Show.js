import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

import { apiGet } from '../misc/config';
 const Show = ( ) => {

    const { id } = useParams();
    // console.log('params',params);
    const [ show , setShow ] = useState(null);


    useEffect( () => {

        apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`).then( results => {
            setShow(results);
        })
    },[id])
    console.log('show', show);
    return (
        <div>
            This is show page
        </div>
    )
}
export default Show