import {useNavigate} from "react-router-dom";
import PageButtons from "./page-buttons";
import "./header.css";

export default function Header () {
    const navigate = useNavigate()

    return (
        <div id="header" className="flex-row">
            <h1 className="center-vertical" onClick={()=>{navigate("/")}}>Spectrum Interactive</h1>
            <PageButtons />
            {/*<LoginDisplay />*/}
        </div>
    )
}