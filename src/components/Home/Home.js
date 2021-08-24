import { Header } from "../Header/Header";
import { BodySlider } from '../Slider/1/1';
import { Footer } from '../Footer/Footer';
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";

export const Home = () =>{
    return(
        <>
            <Header/>
            <ItemDetailContainer/>
            <BodySlider/>
            <Footer/>
        </>
    )
}