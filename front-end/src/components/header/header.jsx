import {useNavigate} from "react-router-dom";
import PageButtons from "./page-buttons";
import "./header.css";
import LoginDisplay from "./login-display";

export default function Header () {
    const navigate = useNavigate()

    return (
        <div id="header">
            <h1 className="center-vertical" onClick={()=>{navigate("/")}}>Spectrum Interactive</h1>
            <PageButtons />
            <LoginDisplay />
        </div>
    )
}