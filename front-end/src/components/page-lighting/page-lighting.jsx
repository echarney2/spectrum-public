import Header from "../header/header";
import "./page-lighting.css";

export default function PageLighting () {
    return (
        <div className="page">
            <Header />
            <div className="filler-1"></div>
            <div className="flex-row">
                <div className="flex-column center">
                    <h1 className="center-horizontal">Lighting For Live Events</h1>
                    <div className="service-description">Detailed description of lighting for live events and videos</div>
                    <button className="center-horizontal">Contact Us</button>
                </div>
                <div className="flex-column">
                    <img src="https://via.placeholder.com/500x500" alt="placeholder" />
                </div>
            </div>
            <div className="filler-1"></div>
        </div>
    )
}