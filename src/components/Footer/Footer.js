import { NavMenu } from "./NavMenu/NavMenu";
import { Servicios } from "./SiteInfo/Servicios";
import { FooterSign } from "./FooterSign/FooterSign";
import "./footer.css";

export const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <Servicios/>
                <NavMenu/>
                <FooterSign/>
            </div>
        </>
    )
}