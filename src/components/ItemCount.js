import React, { useState} from 'react';
import { Button } from 'react-bootstrap';
export const ItemCount = () => {
    const [counter, setCounter] = useState(0);
    return(
        <>
            <div>
                <span>PRODUCTO</span>
                <div>
                    <Button onClick={()=>setCounter(counter-1)}>
                        -
                    </Button>
                    <span>
                        {counter}
                    </span>
                    <Button onClick={()=>setCounter(counter+1)}>
                        +
                    </Button>
                </div>
            </div>
        </>
    )
}