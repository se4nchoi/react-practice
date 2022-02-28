import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/Header.css'

export default function Header () {
    return (
        <section className='header'>
           <div className='header-content'>
               <FontAwesomeIcon icon="earth-americas" />
               <span>my travel journal.</span>
           </div>
        </section>
    )
}