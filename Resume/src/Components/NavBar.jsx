import "./Nav.css";
function NavBar(){
    return <>
        <nav>
            <div className="company-name">Portfolio</div>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <button className="download-button">Download</button>
        </nav>
    </>
}

export default NavBar;