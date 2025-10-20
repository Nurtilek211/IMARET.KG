import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToWish, removeFromWish } from "../../redux/Wish/wishSlice";
import B_HEART from "../../assets/image/B_heart.png";
import R_HEART from "../../assets/image/R_heart.png";
import "./DevelopersMenu.scss";
import Loadinger from "../Loading/Loading";

function DevelopersMenu() {
    const { search } = useOutletContext();
    const [developers, setDevelopers] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const wishItems = useSelector((state) => state.wish.items);

    useEffect(() => {
        const fetchDevelopers = async () => {
            try {
                const res = await axios.get(
                    "https://68e14f818943bf6bb3c3e301.mockapi.io/company/House/apartments"
                );
                setDevelopers(res.data);
            } catch (err) {
                console.error("Ошибка при загрузке:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchDevelopers();
    }, []);

    const isLiked = (dev) => wishItems.some((i) => i.id === dev.id);
    const handleLike = (dev) => {
        if (isLiked(dev)) dispatch(removeFromWish(dev));
        else dispatch(addToWish(dev));
    };

    const filteredDevelopers = developers.filter((dev) => {
        const searchLower = search.toLowerCase();
        const titleMatch = (dev.title || "").toLowerCase().includes(searchLower);
        const developerMatch = (dev.developer || "").toLowerCase().includes(searchLower);
        return titleMatch || developerMatch;
    });

    if (loading) return <Loadinger/>;

    return (
        <div className="developers-menu">
            <div className="developers-grid">
                {filteredDevelopers.length === 0 ? (
                    <p className="developers-menu__empty">Застройщики не найдены 😢</p>
                ) : (
                    filteredDevelopers.map((dev) => (
                        <div key={dev.id} className="developer-card">
                            <div className="developer-card__image">
                                <img
                                    src={dev.image || "https://via.placeholder.com/400x250"}
                                    alt={dev.title || "No name"}
                                />
                                {dev.imageC && (
                                    <div className="company-logo">
                                        <img src={dev.imageC} alt="logo" />
                                    </div>
                                )}
                                <button
                                    className={`heart-btn ${isLiked(dev) ? "liked" : ""}`}
                                    onClick={() => handleLike(dev)}
                                >
                                    <img src={isLiked(dev) ? R_HEART : B_HEART} alt="heart" />
                                </button>
                            </div>
                            <div className="developer-card__info">
                                <h3 className="clorer">{dev.title || "Описание отсутствует."}</h3>
                                <p>{dev.city || "Описание отсутствует."}</p>
                                <p>{dev.address || "Описание отсутствует."}</p>
                                <Link to={`/companies/${dev.id}`} className="details-link">
                                    Подробнее →
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default DevelopersMenu;
