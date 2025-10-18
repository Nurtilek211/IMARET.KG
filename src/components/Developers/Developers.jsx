import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./developers.scss";

function Developers() {
    const [developers, setDevelopers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDevelopers = async () => {
            try {
                const res = await axios.get(
                    "https://68e14f818943bf6bb3c3e301.mockapi.io/company/House/apartments"
                );
                setDevelopers(res.data);
            } catch (err) {
                console.error("Ошибка при загрузке разработчиков:", err);
            }
        };
        fetchDevelopers();
    }, []);

    const handleClick = (dev) => {
        navigate(`/companies/${dev.id}`);
    };

    return (
        <div className="developers-page">
            <h1>Застройщики</h1>
            <div className="developers-grid">
                {developers.map((dev) => (
                    <div
                        key={dev.id}
                        className="developer-card"
                        onClick={() => handleClick(dev)}
                    >
                        <div className="logo-wrapper">
                            <img
                                src={dev.imageC || "https://via.placeholder.com/150"}
                                alt={dev.title || "Логотип"}
                                className="developer-logo"
                            />
                        </div>
                        <div className="developer-info">
                            <h3>{dev.developer || "Название компании"}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Developers;
