import React, { useEffect, useState } from "react";
import "./Banner1.scss";
import Bish from "../../assets/image/Bish.png";
import { apiApartament } from "../../axios/apiApartament";

function Banner1() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://68e14f818943bf6bb3c3e301.mockapi.io";

  useEffect(() => {
    apiApartament
      .get("/apartments")
      .then((res) => {
        const newLogos = res.data
          .map((item) => item.imageC)
          .filter((logo) => logo)
          .map((logo) =>
            logo.startsWith("http") ? logo : `${BASE_URL}${logo}`
          );

        setLogos(newLogos);
      })
      .catch((err) => console.error("Ошибка загрузки логотипов:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Загрузка логотипов...</p>;

  return (
    <div className="Banner1_C">
      <div className="TEXTB">
        <h2 className="title">Наши строй компании</h2>
      </div>
      <div className="BA1_scroll_wrapper">
        <img src={Bish} alt="" className="IMG_BISH" />
        <div className="BA1_auto_scroll">
          {[...logos, ...logos].map((logo, i) => (
            <div className="DIv1" key={i}>
              <img src={logo} alt={`Логотип компании ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner1;
