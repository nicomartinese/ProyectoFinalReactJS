import { ItemDetail } from "../ItemDetail/ItemDetail"
import './itemdetailcontainer.css'
import { productos } from '../../productos';
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    useEffect(
        ()=>{
            setTimeout(async()=>{
                setItem(productos[0]);
            }, 2000);
        },
    );
    return(
        <div className="item-detail-container">
           <ItemDetail {...item}/>
        </div>
        
    )
}