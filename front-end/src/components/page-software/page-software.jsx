import Header from "../header/header";
import * as c from "../../constants";
import "./page-software.css";

export default function PageSoftware() {
    return (
        <div className="page page-software">
            <Header page="/software"/>
            <div className="scrollable">

                    <div className="software-text-area flex-row center-vertical">
                        <div className="flex-column center">
                            <h1 className="center-horizontal">{c.SOFTWARE_PAGE_TITLE}</h1>
                            <div className="service-description">
                                <p>{c.SOFTWARE_PAGE_DESCRIPTION_1}</p>
                                <p>{c.SOFTWARE_PAGE_DESCRIPTION_2}</p>
                                {c.SOFTWARE_SERVICES_LIST.map(service => {
                                    return <li>{service}</li>
                                })}
                                <p>Send an email <a href="mailto:echarney2@gmail.com">echarney2@gmail.com</a> to get started with a free consultation.</p>
                            </div>
                        </div>
                        <div className="flex-column center">
                            <div className="github-container">
                                <p>Note: This website was developed in React and is hosted on AWS. Find the source code on github <a href="https://github.com/echarney2/spectrum-public">here</a>.</p>
                            </div>
                        </div>
                    </div>


            </div>
        </div>
    )
}