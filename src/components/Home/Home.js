import { Header } from "../Header/Header";
import { Slider } from "../Slider/Slider";
import { ItemListContainer } from "../itemListContainer";
import './home.css';

export const Home = () =>{
    return(
        <>
            <Header/>
            <div className="content">
                <Slider/>
                <ItemListContainer/>
            </div>
        </>
    )
}