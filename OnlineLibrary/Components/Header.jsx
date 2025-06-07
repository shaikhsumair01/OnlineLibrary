import { Link } from "react-router-dom";

export default function Header(){
    return(
        <ul className="Nav">
            <Link to="/"><li>Home</li></Link>
            <Link to="/Search"><li>BrowseBooks</li></Link>
            <Link to="/AddNew"><li>AddBook</li></Link>
        </ul>
    )
}