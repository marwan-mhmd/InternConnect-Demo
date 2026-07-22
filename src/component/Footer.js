import { CiMail } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { BiWorld } from "react-icons/bi";
import './Footer.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="custom-footer border-top">
            <div className="container pt-4 pb-4">
                <div className="row gy-4 pt-3">
                    <div className="col-12 col-md-3">
                        <span className="footer-brand d-block mb-3">InternConnect</span>
                        <p className="footer-desc text-uppercase">
                            {t("footer.brandDesc")}
                        </p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h4 className="footer-heading">{t("footer.platform")}</h4>
                        <ul className="list-unstyled footer-list">
                            <li><Link to={'/aboutus'}>{t("footer.aboutUs")}</Link></li>
                            <li><Link to={'/aboutus'}>{t("footer.privacy")}</Link></li>
                            <li><Link to={'/aboutus'}>{t("footer.terms")}</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <h4 className="footer-heading">{t("footer.community")}</h4>
                        <ul className="list-unstyled footer-list">
                            <li><Link to={'/signup'}>{t("footer.partner")}</Link></li>
                            <li><Link to={'/signup'}>{t("footer.blog")}</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <h4 className="footer-heading">{t("footer.connect")}</h4>
                        <div className="d-flex justify-content-start gap-3 footer-socials">
                            <Link to={'/contact'}><span className="icon"><FaRegMessage /></span></Link>
                            <a href="/#"><span className="icon"><BiWorld /></span></a>
                            <Link to={'/contact'}><span className="icon"><CiMail /></span></Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center mt-2 pt-4 border-top">
                    <p className="mb-0 text-uppercase">
                        {t("footer.copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;