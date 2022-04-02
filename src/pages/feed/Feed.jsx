import React from 'react'
import axios from '../../hooks/axios'
import Navbar from "../../components/navbar/Navbar";

import { useState, useEffect, useRef } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { database } from '../../firebase/config'
import { useAuthContext } from "../../hooks/useAuthContext";



export default function Feed() {

    const _search = useRef();
    const [search, setSearch] = useState('')
    const [searchData, setSearchData ] = useState('')
    const [userDetails, setUserDetails] = useState([])
    const { user }  = useAuthContext();
    

    const collectionRef = collection(database, 'users');
    const q = query(collectionRef, where("userId", "==" , `${user.uid}`))

    useEffect(()=>{
        onSnapshot(q, (snapshot)=>{
            let userOne = []
            snapshot.docs.forEach((doc)=>{
                userOne.push({ ...doc.data(), id: doc.id  })
            })
            setUserDetails(userOne)
        })
    },[q])
    
    console.log("single-user-detals",userDetails);

      
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
        <Navbar/>
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
