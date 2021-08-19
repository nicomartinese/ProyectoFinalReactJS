import './footersign.css';

export const FooterSign = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <div className="footersign-container">
                <span>
                    Copyright © {year} El club de la mascota petshop.
                </span>
            </div>
        </>
    )
}