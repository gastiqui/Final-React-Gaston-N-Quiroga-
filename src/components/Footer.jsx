import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import appStore from "./images/app_store_3x_d293084ca1.png";
import playStore from "./images/disponible_google_play_3x_c977cae3bc.png";

const Footer = () => {
    return (
        <div className="container my-5">
            <hr />
            <div className="row">
                <div className="col">
                    <a href={"#"} className="me-3"><img src={facebook} alt={"Facebook"} width={"24"} /></a>
                    <a href={"#"} className="me-3"><img src={twitter} alt={"Twitter"} width={"24"} /></a>
                    <a href={"#"} className="me-3"><img src={instagram} alt={"Instagram"} width={"24"} /></a>
                    <a href={"#"}><img src={youtube} alt={"YouTube"} width={"24"} /></a>
                </div>
                <div className="col text-end">
                    <a href={"#"} target={"_blank"} rel="noreferrer" className="me-3"><img src={appStore} alt={"AppStore"} width={"115"} /></a>
                    <a href={"#"} target={"_blank"} rel="noreferrer"><img src={playStore} alt={"PlayStore"} width={"129"} /></a>
                </div>
                <hr />
            </div>
        </div >
    )
}

export default Footer;