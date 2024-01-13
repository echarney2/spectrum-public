import Header from "../header/header";
import "./page-software.css";

export default function PageSoftware() {
    return (
        <div className="page">
            <Header />
            <div className="software-background">
                <div className="software-text-area">
                    <div className="flex-column center">
                        <h1 className="center-horizontal">Software Services</h1>
                        <div className="service-description">
                            Eric Charney (Spectrum Interactive Owner/Developer) is currently open to full-time/part-time/contract software development opportunities...
                        </div>
                    </div>
                    <div className="flex-column center">
                        <div>
                            <p>Note: This application was developed in React and is hosted on AWS. Find the source code on github <a href="https://github.com/echarney2/spectrum-public">here</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}