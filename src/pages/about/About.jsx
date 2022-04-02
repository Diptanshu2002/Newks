import './about.css'
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';
import Abt from './abt'

export default function About () {
    return (
        <div>
        <Navbar pagename="about"/>
        <Abt/>
        <Footer/>
    </div>
    );
}
