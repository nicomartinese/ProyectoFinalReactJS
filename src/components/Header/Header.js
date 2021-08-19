import './header.css';
import { NavBar } from './NavBar/NavBar'
import { Slider } from './Slider/Slider'

export const Header = ()=>{
    return(
        <>
            <header>
                <NavBar/>
            </header>
            <Slider/>
        </>
    )
}