import { NavBar } from "./NavBar/NavBar";
import { ItemListContainer } from "./itemListContainer";
import { Slider } from "./Slider/Slider";

export const Home = () =>{
    return(
        <>
            <NavBar/>
            <Slider/>
            <ItemListContainer/>
        </>
    )
}