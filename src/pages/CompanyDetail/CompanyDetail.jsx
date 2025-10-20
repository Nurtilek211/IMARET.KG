import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./CompanyDetail.scss";
import { addToWish, removeFromWish } from "../../redux/Wish/wishSlice";
import B_HEART from "../../assets/image/B_heart.png";
import R_HEART from "../../assets/image/R_heart.png";
import Loadinger from "../../components/Loading/Loading";

function CompanyDetail() {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const isLiked = (dev) => wishItems.some((i) => i.id === dev.id);
    const handleLike = (dev) => {
        if (isLiked(dev)) dispatch(removeFromWish(dev));
        else dispatch(addToWish(dev));
    };
    const dispatch = useDispatch();
    const wishItems = useSelector((state) => state.wish.items);


    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const response = await axios.get(
                    `https://68e14f818943bf6bb3c3e301.mockapi.io/company/House/apartments/${id}`
                );
                setCompany(response.data);
            } catch (err) {
                setError("Ошибка при загрузке данных компании.");
            } finally {
                setLoading(false);
            }
        };

        fetchCompany();
    }, [id]);

    if (loading) return <Loadinger />;

    if (error) {
        return <div className="company-detail__error">{error}</div>;
    }

    if (!company) {
        return <div className="company-detail__not-found">Компания не найдена.</div>;
    }

    return (
        <div className="company-detail">
            <div className="company-detail__card">
                <div className="Cardiv">
                    <img
                        src={company.image || "Кортинка отсутствует!"}
                        alt={company.name}
                        className="company-detail__image"
                    />
                    <button
                        className={`heart-btn ${isLiked(company) ? "liked" : ""}`}
                        onClick={() => handleLike(company)}
                    >
                        <img src={isLiked(company) ? R_HEART : B_HEART} alt="heart" />
                    </button>
                </div>
                <div className="company-detail__info">
                    <h2>{company.title || "Описание отсутствует."}</h2>
                    <p className="COnas">{company.developer || "Описание отсутствует."}</p>
                    <p>
                        <strong>Адрес:</strong> {company.address || "Не указан"}
                    </p>
                    <p>
                        <strong>Телефон:</strong> {company.phone || "Нет данных"}
                    </p>
                </div>
            </div>

            {company.apartments && company.apartments.length > 0 ? (
                <div className="company-detail__apartments">
                    <h3>Квартиры от {company.name}</h3>
                    <div className="apartments-grid">
                        {company.apartments.map((apt) => (
                            <div key={apt.id} className="apartment-card">
                                <img
                                    src={apt.image || "https://via.placeholder.com/300x200"}
                                    alt={apt.title}
                                />
                                <div className="apartment-info">
                                    <h4>{apt.title}</h4>
                                    <p>{apt.description}</p>
                                    <p>
                                        <strong>Цена:</strong> {apt.price ? `${apt.price} ₽` : "Не указана"}
                                    </p>
                                    <Link to={`/apartments/${apt.id}`} className="apartment-link">
                                        Подробнее
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="company-detail__no-apartments">
                    У компании нет доступных квартир.
                </p>
            )}

            <div className="company-detail__back">
                <Link to="/companies" className="back-button">
                    ← Назад к списку компаний
                </Link>
            </div>
        </div>
    );
}

export default CompanyDetail;
