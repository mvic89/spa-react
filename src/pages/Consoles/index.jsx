import ConsoleContent from "../../components/ConsolesContent"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"

const Consoles = () => {
    return (
        <>
        <Hero title='Welcome to the Consoles Page!' subtitle='Information about the SEGA Consoles '/>
        <ConsoleContent 
            conHead='History'
            conPar1='The SEGA Mega Drive/Genesis (as known in the US) was a revolutionary 16-Bit console at the time and is the system attributed to the historical success the company enjoyed and as such is an essential part of gaming history.'
            conPar2='It was the console that broke the monopolies Nintendo had on the console industry by inspiring the first great console war that took place from boardrooms to playgrounds winning SEGA a substantial market share bringing them from an $813 million company in 1989 to a $3.6 billion conglomerate by 1993.'
            conPar3='This battle, most fiercely fought in North America, was not only good for profits but it was the catalyst for taking the image of gaming away from the player in seclusion to the masses where it is today, and oh yes, introduced us to the phenomenon that is Sonic The Hedgehog.'
        />
        <Footer/>
        </>
    )
}

export default Consoles