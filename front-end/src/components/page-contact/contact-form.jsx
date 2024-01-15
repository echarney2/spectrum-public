import {useState} from "react";

export default function ContactForm() {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [subject, setSubject] = useState("");
    let [message, setMessage] = useState("");

    function onSubmit() {
        alert("This feature is not yet implemented. Please send an email")
    }

    return (
        <div className="flex-column about-us-text-area">
            <h1 className="center-horizontal">Contact Us</h1>
            <label>Name</label>
            <input value={name} onChange={(evt) => {setName(evt.target.value)}}></input>
            <label>Email</label>
            <input value={email} onChange={(evt) => {setEmail(evt.target.value)}}></input>
            <label>Subject</label>
            <input value={subject} onChange={(evt) => {setSubject(evt.target.value)}}></input>
            <label>Message</label>
            <textarea value={message} onChange={(evt) => {setMessage(evt.target.value)}}></textarea>
            <button className="send-button" onClick={onSubmit}>Send</button>
            <div className="service-description">Or send an email to echarney2@gmail.com</div>
        </div>
    )
}