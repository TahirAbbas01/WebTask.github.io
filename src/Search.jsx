import React from 'react';
import { useState } from 'react';
import "./App.css";



const Search = () =>
{
    const inputEvent = (event) =>
    {
        const data = event.target.value;
        console.log(data);
    }
    
    const [img,useImg] = useState("");
  return (
            <>
                <h1 className='heading' value={img} onChange={inputEvent}>Search Page</h1>
            
            </>

            )
}

export default Search;