import {useNavigate} from "react-router-dom";
import PageButtons from "./page-buttons";
import "./header.css";

export default function Header ({page}) {
    const navigate = useNavigate()

    return (
        <div id="header" className="flex-row">
            <h1 className="center-vertical" onClick={()=>{navigate("/")}}>Spectrum Interactive</h1>
            <PageButtons page={page}/>
            {/*<LoginDisplay />*/}
        </div>
    )
}