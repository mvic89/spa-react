import styles from './hero.module.css'

const Hero = ({title='Welcome to the Home Page!', subtitle='The page that pays homage to everything SEGA!'}) => {
    return (
        <section className={styles.heroContainer}>
            <div>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    )
}

export default Hero