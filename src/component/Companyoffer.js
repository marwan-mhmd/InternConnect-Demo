import { IoBagRemoveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Companyoffer() {
    const { t } = useTranslation();

    return (
        <div className="offer-card company-card h-100 d-flex flex-column p-5">
            <div className="icon-wrapper mb-4 d-flex align-items-center justify-content-center">
                <IoBagRemoveOutline className="fs-3 text-primary" />
            </div>
            <h2 className="offer-title mb-3">{t("companyOffer.title")}</h2>
            <p className="offer-desc text-muted mb-4">
                {t("companyOffer.desc")}
            </p>
            <div className="mt-auto">
                <Link to={'/signup'} className="btn outline-btn rounded-pill px-4 py-2 fw-bold">
                    {t("companyOffer.enterprise")}
                </Link>
            </div>
        </div>
    );
}
export default Companyoffer;