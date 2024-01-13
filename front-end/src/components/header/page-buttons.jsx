import {useNavigate} from "react-router-dom";

export default function PageButtons () {
    const navigate = useNavigate()
    const pages = [
        {name: "Home", path: "/"},
        {name: "Lighting", path: "/lighting"},
        {name: "Software", path: "/software"},
        {name: "About Us", path: "/contact"}
    ]

    return (
        <div id="page-buttons">
            {pages.map( (page) => {
                return <div className="page-button" onClick={()=>{navigate(page.path)}}>{page.name}</div>
            })}
        </div>
    )
}