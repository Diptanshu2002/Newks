import React from 'react'
import axios from '../../hooks/axios'
import { useState, useEffect, useRef } from 'react'



export default function Feed() {
    const _search = useRef();
    const [search, setSearch] = useState('')
    const [searchData, setSearchData ] = useState('')

      
    function handleSearchSubmit(e){
        e.preventDefault();
        setSearch(_search.current.value)
    }

    useEffect(() => {
        async function fetchUser() {
            console.log(search);
            const res = await axios(`/search?sear=${search}`);
            setSearchData(res.data);
        }
        fetchUser()
      }, [search]);



  return (
    <div>
        <form onSubmit={handleSearchSubmit}>
            <label>
                <input 
                    type="text"
                    placeholder='Search'
                    // onChange={(e)=>{setSearch(e.target.value)}} 
                    ref={_search} />
                <button type='submit'>Search</button>

                {searchData && <p>{searchData}</p>}
            </label>
        </form>
    </div>
  )
}
