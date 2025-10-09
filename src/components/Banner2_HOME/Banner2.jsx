import React, { useEffect, useState } from "react";
import "./Banner2.scss";
import B_HEART from "../../assets/image/B_heart.png";
import R_HEART from "../../assets/image/R_heart.png";
import { apiApartament } from "../../axios/apiApartament";

function Banner2() {
    const [liked, setLiked] = useState(false);
    const [complexes, setComplexes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiApartament
            .get("/apartments")
            .then((res) => setComplexes(res.data))
            .catch((err) => console.error("Ошибка при загрузке:", err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Загрузка...</p>;

    return (
        <div className="Banner_HOME">
            <div className="TEAXTIK">
                <h3>Жилые комплексы, Новостройки Бишкека</h3>
            </div>

            <div className="Banner_HOPPy">
                {complexes.map((item) => (
                    <div className="B_HOMEE" key={item.id}>
                        <div className="B_IMG_HOME">
                            <img src={item.image} alt={item.title} className="IMG_B1" />
                            <img src={item.imageC} alt="" className="IMG_B2_C" />
                            <img
                                src={liked ? R_HEART : B_HEART}
                                alt="heart"
                                className="IMG_B2"
                                onClick={() => setLiked(liked)}
                            />
                        </div>

                        <div className="B_TEXT_HOME">
                            <div className="B_TEXT_top">
                                <h3>{item.title}</h3>
                                <div>
                                    <p className="B_p1">{item.developer}</p>
                                </div>
                                <p className="B_p2">{item.city}</p>
                                <p className="B_p3">{item.address}</p>
                                <h4>от ${item.price_per_m2} за м²</h4>
                            </div>

                            <div className="B_TEXT_bottom">
                                {item.flats.map((flat, i) => (
                                    <div key={i}>
                                        <p className="Ban_p1">{flat.rooms}-ком.</p>
                                        <p className="Ban_p2">от {flat.area}</p>
                                        <p className="Ban_p3">от ${flat.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banner2;