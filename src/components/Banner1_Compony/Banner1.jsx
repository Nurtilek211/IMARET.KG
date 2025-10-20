import React, { useEffect, useState } from "react";
import "./Banner1.scss";
import Bish from "../../assets/image/Bish.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Banner1() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(
          "https://68e14f818943bf6bb3c3e301.mockapi.io/company/House/apartments"
        );

        const uniqueCompanies = res.data.filter(
          (company, index, self) =>
            index === self.findIndex((c) => c.imageC === company.imageC)
        );

        setCompanies(uniqueCompanies);
      } catch (err) {
        console.error("Ошибка при загрузке логотипов:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) return <p className="banner-loading">Загрузка логотипов...</p>;

  return (
    <div className="Banner1_C">
      <div className="TEXTB">
        <h2 className="title">Наши строительные компании</h2>
      </div>

      <div className="BA1_scroll_wrapper">
        <img src={Bish} alt="" className="IMG_BISH" />
        <div className="BA1_auto_scroll">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="DIv1"
              onClick={() => navigate(`/companies/${company.id}`)}
            >
              <img
                src={company.imageC || Bish}
                alt={company.title || "Компания"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner1;
