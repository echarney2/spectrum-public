import Header from "../header/header";
import "./page-software.css";

export default function PageSoftware() {
    return (
        <div className="page">
            <Header />
            <div className="software-background">
                <div className="software-text-area flex-row">
                    <div className="flex-column center">
                        <h1 className="center-horizontal">Software Services</h1>
                        <div className="service-description">

                            <p>We will work closely with you to understand your specific needs and challenges, and collaborate with you to determine the best solution for you or your business. </p>
                            <p>Whether it's an off-the-shelf product or a custom built system, we'll ensure that it's cost effective and delivers the highest possible value. We specialize in:</p>

                            <li>Full-stack cloud-based web applications</li>
                            <li>Desktop Applications</li>
                            <li>Control, Automation, and Testing</li>
                            <p>Contact us <a href={"/contact"}>here</a> or send an email to echarney2@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex-column center">
                        <div className="github-container">
                            <p>Note: This application was developed in React and is hosted on AWS. Find the source code on github <a href="https://github.com/echarney2/spectrum-public">here</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}