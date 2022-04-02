import './stockWiki.css'
import Navbar from "../../components/navbar/Navbar";

export default function Home(){
    return (
        <div className='home'>
            <Navbar pagename = 'home'/>
            <h1>stockswiki</h1>
        </div>
    );
}

