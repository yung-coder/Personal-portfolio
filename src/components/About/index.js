import { faCss3, faFigma, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
const About = () => {
    return (
        <div className='container about-page'>
          <div className='text-zone'>
            <h1>
                About me
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, distinctio alias? Tenetur neque a vitae odio aspernatur in officiis excepturi ea ipsum ratione.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam debitis porro quod saepe iste. Quia, accusantium placeat. Exercitationem illo eveniet nam cum commodi!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime itaque, debitis tempora quia doloremque!</p>
          </div>
          <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faReact} color="blue" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="orange" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="blue" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faJs} color="yellow" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faFigma} color="pink" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGift} color="black" />
                </div>
            </div>
          </div>
        </div>
    )
}


export default About;