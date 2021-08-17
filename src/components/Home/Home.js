import { Header } from "../Header/Header";
import { Slider } from "../Slider/Slider";
import { ItemListContainer } from "../itemListContainer";
import './home.css';
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";

export const Home = () =>{
    return(
        <>
            <Header/>
            <div className="content">
                <Slider/>
                <ItemListContainer/>
                <ItemDetailContainer/>
            </div>
        </>
    )
}