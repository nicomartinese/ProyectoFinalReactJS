import React, { useState} from 'react';
export const ItemCount = (props) => {
    const [counter, setCounter] = useState(parseInt(props.initial));
    const resta =()=>{
        setCounter(counter>1? counter - 1: console.log("unidades minimas"))
    }
    const suma =()=>{
        setCounter(counter<parseInt(props.stock)? counter + 1: console.log("out of stock"))
    }
    return(
        <>
            <div>
                <span>PRODUCTO</span>
                <div>
                    <button onClick={resta}>
                        -
                    </button>
                    <span>
                        {counter}
                    </span>
                    <button onClick={suma}>
                        +
                    </button>
                </div>
                <div>
                    <button>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </>
    )
}