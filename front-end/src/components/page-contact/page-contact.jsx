import Header from "../header/header";
import {useState} from "react";
import "./page-contact.css";

export default function PageContact() {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const onSubmit = (evt) => {
        alert('Contact Us form has not been implemented yet. Please send your message directly to echarney2@gmail.com')
    }

    return (
        <div className="page page-contact">
            <Header />

            <div className="scrollable">
                <div className="flex-row center-vertical about-us-text-area">
                    <div className="flex-column">
                        <img className="img-grow" src="/img/eric-photo.jpg" alt="Eric Charney Photo"/>
                    </div>
                    <div className="flex-column center">
                        <h1 className="center-horizontal">About Us</h1>
                        <p className="about-us-text">Spectrum Interactive is owned and operated by Eric Charney, a Physicist and Software Developer based out of Denver Colorado. Eric has 7 years of professional experience as a software developer ranging from test/manufacturing to physics research to e-commerce. You can find Eric's full professional resume <a>here</a>.</p>
                        <p className="about-us-text">Eric has a lifelong passion for music, science, and technology and is always looking for ways to fuse the three together. Eric originally designed the Spectrum Interactive Lighting Instrument for use in his local bands Zero Player Game, Tezca, and Koion Kitten</p>
                    </div>
                </div>
                <div className="flex-row center-vertical">
                    <div className="flex-column center about-us-text-area">
                        <h1 className="center-horizontal">Contact Us</h1>
                        <label>Name</label>
                        <input></input>
                        <label>Email</label>
                        <input></input>
                        <label>Subject</label>
                        <input></input>
                        <label>Message</label>
                        <textarea></textarea>
                        <button className="send-button" onClick={onSubmit}>Send</button>
                        <div className="service-description">Or send an email to echarney2@gmail.com</div>
                    </div>
                    <div className="flex-column">
                    </div>
                </div>

            </div>


        </div>
    )
}