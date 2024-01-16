import {useNavigate} from "react-router-dom";

export default function PageButtons ({page}) {
    const navigate = useNavigate()
    const pages = [
        {name: "Home", path: "/"},
        {name: "Lighting", path: "/lighting"},
        {name: "Software", path: "/software"},
        {name: "About Us", path: "/contact"}
    ]

    return (
        <div id="page-buttons">
            {pages.map( (p, index) => {
                const className = p.path === page ? "page-button page-button-selected" : "page-button"
                return <div key={index} className={className} onClick={()=>{navigate(p.path)}}>{p.name}</div>
            })}
        </div>
    )
}