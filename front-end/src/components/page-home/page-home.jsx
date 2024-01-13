import Header from "../header/header";
import "./page-home.css";
import {useNavigate} from "react-router-dom";

export default function PageHome() {
    const navigate = useNavigate()

    return (
        <div className="page">
            <Header />
            <div id="welcome-area">
                <div className="flex-column center">
                    <h1 className="center-horizontal">Welcome</h1>
                    <p className="service-description">Offer a brief description of the business here.</p>
                    <button className="center-horizontal" onClick={() => {navigate("/")}}>Contact Us</button>
                </div>
            </div>
            <div id="services-area">
                <div className="flex-column center">
                    <h1 className="center-horizontal">Services</h1>
                    <div className="flex-row center-horizontal">
                        <div className="container-1">
                            <h3 className="center-horizontal">Lighting</h3>
                            <div className="service-description">Service 1 description goes here</div>
                            <button className="center-horizontal" onClick={() => {navigate("/lighting")}}>Lighting Services</button>
                        </div>
                        <div className="container-1">
                            <h3 className="center-horizontal">Software Development</h3>
                            <div className="service-description">Service 2 description goes here</div>
                            <button className="center-horizontal" onClick={() => {navigate("/software")}}>Software Services</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}