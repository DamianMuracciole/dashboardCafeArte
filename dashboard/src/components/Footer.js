import logo from "../assets/images/logo1.png"

export default function Footer(){
    return (
    <>
    <footer>

<div className="logo-footer">
    <a href="/"><img src={logo} alt=""/></a>
</div>
<div className="info">
    <div className="info-left">
        <div className="nav-footer">
            <ul>
                <li><a href="/">Home</a></li>
                
            </ul>
        </div>
    </div>

  
</div>

<div className="cpyrgt">
    <p>© Copyright Café Arte</p>
</div>

</footer>
    </>
    )
}