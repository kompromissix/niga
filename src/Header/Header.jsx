import "./Header.css"
import logo from "./Header-assets/Logo.png"
import img_hero from "./Header-assets/img-hero.png"
import img from "./Header-assets/Group7.png"
import img2 from "./Header-assets/Group8.png"
import img3 from "./Header-assets/Group9.png"
import img4 from "./Header-assets/Group10.png"


export default function Header() {
    return(
        <>
            <header>
                <nav>
                    <img src={logo} alt="" />
                    <div className="nav">
                        <a href="">About</a>
                        <a href="">How it work</a>
                        <a href="">Pricing</a>
                        <a href="">Solution</a>
                        <a href="">Features</a>
                    </div>
                    <div className="regist">
                        <p>Login</p>
                        <button>
                            <p>Register</p>
                        </button>
                    </div>
                </nav>
                <div className="background1">
                    <div className="top-elonmusk">
                        <h1>Minimize your tabs. Find the trends!</h1>
                        <p>Don’t let your computer memories consumes all of those browser tabs. Findtrend  let you gathers all of your favorite website into one place.</p>
                        <div>
                            <div>
                                <p>Get Started 🔥</p>
                            </div>
                            <img src={img_hero} alt="" />
                        </div>
                    </div>
                    <div className="elonmusk">
                        <div className="img1">
                            <img src={img} alt="" />
                        </div>
                        <div className="img2">
                            <img src={img2} alt="" />
                        </div>
                        <div className="img3">
                            <img src={img3} alt="" />
                        </div>
                        <div className="img4">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}