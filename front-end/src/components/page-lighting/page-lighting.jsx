import Header from "../header/header";
import "./page-lighting.css";
import * as c from "../../constants";
import {useNavigate} from "react-router-dom";

export default function PageLighting () {
    const navigate = useNavigate();

    return (
        <div className="page page-lighting">
            <Header />

            <div className="scrollable">

                {/* Description of lighting services offered*/}
                <div className="flex-row">
                    <div className="lighting-text flex-column">
                        <h1 className="center-horizontal">{c.LIGHTING_PAGE_TITLE}</h1>
                        <div className="service-description">{c.LIGHTING_PAGE_DESCRIPTION}</div>
                        <button className="center-horizontal" onClick={() => navigate("/contact")}>Contact Us</button>
                    </div>
                </div>

                {/* Description of the Spectrum Interactive Lighting Controller*/}
                <div className="flex-row center">
                    <div className="lighting-text flex-row">
                        <div className="flex-column center">
                            <h1 className="center-horizontal">SILI</h1>
                            <h3 className="center-horizontal">(Spectrum Interactive Lighting Instrument)</h3>
                            <div className="service-description">{c.SILI_DESCRIPTION_1}</div>
                            {c.SILI_FEATURES.map((feature, index) => {
                                return <li key={index}>{feature}</li>
                            })}
                            <div className="service-description">{c.SILI_DESCRIPTION_2}</div>
                        </div>
                        <div className="flex-column center">
                            <img className="opaque" height={300} src="/img/dmx_control_screenshot.png" alt="SILI"></img>
                        </div>
                    </div>
                </div>

                {/* Video Links*/}
                <div className="flex-column center">
                    <div className="flex-row center">
                        {c.VIDEO_LINKS.map((link, index) => {
                            return (
                                <div key={index} className="video-link">
                                    <iframe height={200} src={link} allow="web-share" allowFullScreen></iframe>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>


        </div>
    )
}