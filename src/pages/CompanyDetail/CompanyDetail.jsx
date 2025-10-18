import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./CompanyDetail.scss";

function CompanyDetail() {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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

    if (loading) {
        return <div className="company-detail__loading">Загрузка...</div>;
    }

    if (error) {
        return <div className="company-detail__error">{error}</div>;
    }

    if (!company) {
        return <div className="company-detail__not-found">Компания не найдена.</div>;
    }

    return (
        <div className="company-detail">
            <div className="company-detail__card">
                <img
                    src={company.image || "https://via.placeholder.com/300x200"}
                    alt={company.name}
                    className="company-detail__image"
                />
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
