import Header from "../header/header";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import {useNavigate} from "react-router-dom";
import * as c from "../../constants";
import "./page-home.css";

export default function PageHome() {
    const navigate = useNavigate()

    return (
        <div className="page">
            <Header />
            <div className="scrollable">
                <div id="welcome-area">
                    <div className="welcome-text-container">
                        <div id="welcome-text">
                            <h1 className="center-horizontal">{c.WELCOME_HEADER}</h1>
                            <p className="service-description">{c.WELCOME_MESSAGE_1}</p>
                            {c.WELCOME_OPTIONS.map((option) => {
                                return <li>{option}</li>
                            })}
                            <p className="service-description">{c.WELCOME_MESSAGE_2}</p>
                            <button className="center-horizontal" onClick={() => {navigate("/contact")}}>Contact Us</button>
                        </div>
                    </div>


                </div>
                <div id="services-area">
                    <div className="flex-column center">
                        {/*<h1 className="center-horizontal">Services</h1>*/}
                        <div className="flex-row">
                            <div className="flex center-horizontal">
                                <div className="container-1">
                                    <h3 className="center-horizontal">{c.LIGHTING_HEADER}</h3>
                                    <div className="flex-row"><HiOutlineLightBulb className="center-horizontal icon"></HiOutlineLightBulb></div>
                                    <div className="service-description">{c.LIGHTING_MESSAGE}</div>
                                    <button className="center-horizontal" onClick={() => {navigate("/lighting")}}>Lighting Services</button>
                                </div>
                            </div>

                            <div className="flex center-horizontal">
                                <div className="container-1">
                                    <h3 className="center-horizontal">{c.SOFTWARE_HEADER}</h3>
                                    <div className="flex-row"><TbDeviceDesktopAnalytics className="center-horizontal icon"></TbDeviceDesktopAnalytics></div>
                                    <div className="service-description">{c.SOFTWARE_MESSAGE}</div>
                                    <button className="center-horizontal" onClick={() => {navigate("/software")}}>Software Services</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}