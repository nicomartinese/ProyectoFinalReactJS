import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";

export const Componente2 = () =>{
    const isDarkMode = useContext(ThemeContext);
    return (
        <p>
            {console.log('isDarkMode' + isDarkMode)}
        </p>
    )
}