import styles from './main-content.module.css'
import { getImageUrl } from '../../utils/functions'

const MainContent = () => {
    return (
        <div className={styles.mainContainer}>
        <img className={styles.contentImage} src={getImageUrl('megadrive.png')} />
        <div>
            <h1>Sega MegaDrive</h1>
            <p>This is a page dedicated to one of my favorite consoles growing up as a kid. It contains some background history about the SEGA Megadrive as well as a list of 10 bad ass games that no one should have missed out of. </p>
        </div>
        </div>
    )
}

export default MainContent