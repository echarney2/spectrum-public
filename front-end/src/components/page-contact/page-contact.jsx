import Header from "../header/header";

export default function PageContact() {
    return (
        <div className="page">
            <Header />
            <div className="filler-1"></div>
            <div className="flex-row">
                <div className="flex-column">
                    <img src="https://via.placeholder.com/500x500" alt="placeholder" />
                </div>
                <div className="flex-column center">
                    <h1 className="center-horizontal">About Us</h1>
                    <div className="service-description">Description of spectrum interactive</div>
                </div>
            </div>
            <div className="filler-1"></div>
            <div className="flex-row">
                <div className="flex-column center">
                    <h1 className="center-horizontal">Contact Us</h1>
                    <div className="service-description">Contact information</div>
                </div>
                <div className="flex-column">
                </div>
            </div>
            <div className="filler-1"></div>
        </div>
    )
}