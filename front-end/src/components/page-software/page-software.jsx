import Header from "../header/header";

export default function PageSoftware() {
    return (
        <div className="page">
            <Header />
            <div className="filler-1"></div>
            <div className="flex-row">
                <div className="flex-column center">
                    <h1 className="center-horizontal">Software Services</h1>
                    <div className="service-description">Detailed description of software development services. Include a link to the github repository for this very website.</div>
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