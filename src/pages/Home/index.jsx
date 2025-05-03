import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import MainContent from "../../components/MainContent"

const Home = () => {
    return (
        <>
        <Hero/>
        <MainContent paragraphText='This is a page dedicated to one of my favorite consoles growing up as a kid. It contains some background history about the SEGA Megadrive as well as a list of 8 bad ass games that no one should have missed out on.'/>
        <Footer/>
        </>
    )
}

export default Home