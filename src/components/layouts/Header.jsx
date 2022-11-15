import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container py-4 d-flex justify-content-between">
                <Link to="/">Home</Link>
                <Link to="/">Men</Link>
                <Link to="/">Women</Link>

                <Link to="/" className="fw-bold">LOGO</Link>

                <Link to="/">Kids</Link>
                <Link to="/">Skin</Link>
                <Link to="/">Outfits</Link>
            </div>
        </header>
    )
}
export default Header;