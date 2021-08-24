import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
export const LoadingComponent = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 10000);
    }, []);
    return(
        <>
            {loading&& <Spinner animation="grow" />}
        </>
    )
}