import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
const Home =()=>{

    return(
        <>
        <div className="contanier home-page">
            <div className="text-zone">
                <h1>Hi , <br /> I'm
                <img src={LogoTitle} alt="developer" />
                Saksham
                <br />
                web developer
                </h1>
                <h2>Frontend developer / Javascript </h2>
                <Link to='/contact' className='flag-button'>CONTACT ME</Link>
            </div>
        </div>
        </>
    )
}

export default Home