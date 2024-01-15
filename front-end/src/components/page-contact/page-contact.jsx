import Header from "../header/header";
import {useState} from "react";
import "./page-contact.css";
import ContactForm from "./contact-form";

export default function PageContact() {

    return (
        <div className="page page-contact">
            <Header page="/contact"/>

            <div className="scrollable">
                <div className="flex-row center-vertical about-us-text-area">
                    <div className="flex-column center-horizontal padding-r-30">
                        <img width={500} className="img-grow margin-r-20" src="/img/eric-photo.jpg" alt="Eric Charney Photo"/>
                    </div>
                    <div className="flex-column center">
                        <h1 className="center-horizontal">About Us</h1>
                        <p className="about-us-text">Spectrum Interactive is owned and operated by Eric Charney, a Physicist and Software Developer based out of Denver Colorado. Eric has 7 years of professional experience ranging from test/manufacturing to physics research to web development. You can find Eric's full professional resume <a href="/Eric-Charney-Resume.pdf">here</a>.</p>
                        <p className="about-us-text">Eric has a lifelong passion for music, science, and technology and is always looking for ways to fuse the three together. Eric originally designed the Spectrum Interactive Lighting Instrument for use in his local bands Zero Player Game, Tezca, and Koion Kitten.</p>
                    </div>
                </div>
                <div className="flex-row center-vertical">
                    <div className="center-horizontal">
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}