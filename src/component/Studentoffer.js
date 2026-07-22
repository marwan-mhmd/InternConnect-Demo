import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Studentoffer() {
    const { t } = useTranslation();

    return (
        <div className="offer-card student-card h-100 d-flex flex-column p-5">
            <h2 className="offer-title text-white mb-3">{t("studentOffer.title")}</h2>
            <p className="offer-desc text-white-50 mb-4">
                {t("studentOffer.desc")}
            </p>
            <div className="mt-auto">
                <Link to={'/signup'} className="btn white-btn rounded-pill px-4 py-2 fw-bold">
                    {t("studentOffer.createProfile")}
                </Link>
            </div>
        </div>
    );
}
export default Studentoffer;