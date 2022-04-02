import React from 'react'
import axios from '../../hooks/axios'
import Navbar from "../../components/navbar/Navbar";

import { useState, useEffect, useRef } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { database } from '../../firebase/config'
import { useAuthContext } from "../../hooks/useAuthContext";
import  Cardfeed  from './cardfeed'
import Footer from '../../components/footer/Footer';



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
        {/* <Navbar/>
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
        </form> */}
        <div>
        <Navbar pagename="home"/>
        <div className='container d-inline-flex'>
            <svg width="278" height="107" viewBox="0 0 278 107" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M63.8 23.4V85H52.096L21.384 47.6V85H7.304V23.4H19.096L49.72 60.8V23.4H63.8ZM108.822 61.504C108.822 61.68 108.734 62.912 108.558 65.2H72.7423C73.3876 68.1333 74.913 70.4507 77.3183 72.152C79.7236 73.8533 82.7156 74.704 86.2943 74.704C88.7583 74.704 90.929 74.352 92.8063 73.648C94.7423 72.8853 96.5316 71.712 98.1743 70.128L105.478 78.048C101.02 83.152 94.5076 85.704 85.9423 85.704C80.6036 85.704 75.881 84.6773 71.7743 82.624C67.6676 80.512 64.4996 77.608 62.2703 73.912C60.041 70.216 58.9263 66.0213 58.9263 61.328C58.9263 56.6933 60.0116 52.528 62.1823 48.832C64.4116 45.0773 67.433 42.1733 71.2463 40.12C75.1183 38.008 79.4303 36.952 84.1823 36.952C88.817 36.952 93.0116 37.9493 96.7663 39.944C100.521 41.9387 103.454 44.8133 105.566 48.568C107.737 52.264 108.822 56.576 108.822 61.504ZM84.2703 47.336C81.161 47.336 78.5503 48.216 76.4383 49.976C74.3263 51.736 73.0356 54.1413 72.5663 57.192H95.8863C95.417 54.2 94.1263 51.824 92.0143 50.064C89.9023 48.2453 87.321 47.336 84.2703 47.336ZM178.175 37.656L161.015 85H147.815L137.167 55.608L126.167 85H112.967L95.8946 37.656H108.831L120.007 69.688L131.623 37.656H143.239L154.503 69.688L166.031 37.656H178.175Z" fill="white"/>
            <path d="M201.744 60.8L193.472 69.424V85H179.304V23.4H193.472V52.176L220.752 23.4H236.592L211.072 50.856L238.088 85H221.456L201.744 60.8ZM248.436 86.056C243.566 86.056 238.844 85.4107 234.268 84.12C229.75 82.7707 226.113 81.04 223.356 78.928L228.196 68.192C230.836 70.128 233.974 71.6827 237.612 72.856C241.249 74.0293 244.886 74.616 248.524 74.616C252.572 74.616 255.564 74.0293 257.5 72.856C259.436 71.624 260.404 70.0107 260.404 68.016C260.404 66.5493 259.817 65.3467 258.644 64.408C257.529 63.4107 256.062 62.6187 254.244 62.032C252.484 61.4453 250.078 60.8 247.028 60.096C242.334 58.9813 238.492 57.8667 235.5 56.752C232.508 55.6373 229.926 53.848 227.756 51.384C225.644 48.92 224.588 45.6347 224.588 41.528C224.588 37.9493 225.556 34.7227 227.492 31.848C229.428 28.9147 232.332 26.5973 236.204 24.896C240.134 23.1947 244.916 22.344 250.548 22.344C254.478 22.344 258.321 22.8133 262.076 23.752C265.83 24.6907 269.116 26.04 271.932 27.8L267.532 38.624C261.841 35.3973 256.15 33.784 250.46 33.784C246.47 33.784 243.508 34.4293 241.572 35.72C239.694 37.0107 238.756 38.712 238.756 40.824C238.756 42.936 239.841 44.52 242.012 45.576C244.241 46.5733 247.614 47.5707 252.132 48.568C256.825 49.6827 260.668 50.7973 263.66 51.912C266.652 53.0267 269.204 54.7867 271.316 57.192C273.486 59.5973 274.572 62.8533 274.572 66.96C274.572 70.48 273.574 73.7067 271.58 76.64C269.644 79.5147 266.71 81.8027 262.78 83.504C258.849 85.2053 254.068 86.056 248.436 86.056Z" fill="white"/>
            </svg>

            <form className="mx-auto d-flex my-auto" style={{width:'600px'}}>
                <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" style={{borderRadius:'30px'}}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{borderRadius:'30px'}}>Search</button>
            </form>
        </div>
        <div className="container d-flex">
            <div id="" style={{overflow:'scroll', height:'400px', width:'700px', marginRight: '60px'}}>
                <Cardfeed/>
            </div>
            <div id="" style={{overflow:'scroll', height:'400px', width: '700px'}}>
                <Cardfeed/>
            </div>
        </div>
        <Footer/>
    </div>
    </div>
  )
}
