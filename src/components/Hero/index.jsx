import styles from './hero.module.css'

const Hero = ({title='Welcome to the Home Page!', subtitle='The page that pays homage to everything SEGA!'}) => {
    return (
        <div className={styles.divContainer}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default Hero