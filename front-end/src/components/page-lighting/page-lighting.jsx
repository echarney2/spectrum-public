import Header from "../header/header";
import "./page-lighting.css";
import * as c from "../../constants";
import {useNavigate} from "react-router-dom";

export default function PageLighting () {
    const navigate = useNavigate();

    return (
        <div className="page page-lighting">
            <Header page="/lighting"/>

            <div className="scrollable">

                {/* Description of lighting services offered*/}
                <div className="flex-row">
                    <div className="center-horizontal">
                        <div className="lighting-text flex-column">
                            <h1 className="center-horizontal">{c.LIGHTING_PAGE_TITLE}</h1>
                            <p className="service-description">{c.LIGHTING_PAGE_DESCRIPTION}</p>
                            <p className="service-description">For info and booking, reach out to <a href="mailto:echarney2@gmail.com">echarney2@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                {/* Description of the Spectrum Interactive Lighting Controller*/}
                <div className="flex-row">
                    <div className="center-horizontal">
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
                            <div className="center padding-r-20">
                                <img width={600} className="img-grow" src="/img/dmx_control_screenshot.png" alt="SILI"></img>
                            </div>
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