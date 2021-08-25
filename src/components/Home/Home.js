import { Header } from "../Header/Header";
import { BodySlider } from '../Slider/1/1';
import { Footer } from '../Footer/Footer';
import { ItemListContainer } from "../ItemListContainer/itemListContainer";

export const Home = () =>{
    return(
        <>
            <Header/>
            <ItemListContainer/>
            <BodySlider/>
            <Footer/>
        </>
    )
}