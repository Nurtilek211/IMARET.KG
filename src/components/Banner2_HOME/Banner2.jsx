import React, { useEffect, useState } from "react";
import "./Banner2.scss";
import B_HEART from "../../assets/image/B_heart.png";
import R_HEART from "../../assets/image/R_heart.png";
import { apiApartament } from "../../axios/apiApartament";
import { useDispatch, useSelector } from "react-redux";
import { addToWish, removeFromWish } from "../../redux/Wish/wishSlice";
import { useNavigate } from "react-router-dom";
import Loadinger from "../Loading/Loading";
import Pagination from "../Panigation/Panigation";

function Banner2() {
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.wish.items);
  const navigate = useNavigate();

  const [complexes, setComplexes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    apiApartament
      .get("/apartments")
      .then((res) => setComplexes(res.data))
      .catch((err) => console.error("Ошибка при загрузке:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loadinger />;

  const isLiked = (item) => wishItems.some((i) => i.id === item.id);

  const handleLike = (item) => {
    if (isLiked(item)) {
      dispatch(removeFromWish(item));
    } else {
      dispatch(addToWish(item));
    }
  };

  const totalPages = Math.ceil(complexes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleComplexes = complexes.slice(startIndex, endIndex);

  return (
    <div className="Banner_HOME">
      <div className="TEAXTIK">
        <h3>🏗️ Жилые комплексы и новостройки Бишкека</h3>
        <p>Выберите свой будущий дом от лучших застройщиков города</p>
      </div>

      <div className="Banner_HOPPy">
        {visibleComplexes.map((item) => (
          <div className="B_HOMEE" key={item.id}>
            <div className="B_IMG_HOME">
              <img src={item.image} alt={item.title} className="IMG_B1" />

              {item.imageC && (
                <div
                  className="company-logo"
                  onClick={() => navigate(`/companies/${item.id}`)}
                >
                  <img src={item.imageC} alt="logo" />
                </div>
              )}

              <button
                className={`heart-btn ${isLiked(item) ? "liked" : ""}`}
                onClick={() => handleLike(item)}
              >
                <img src={isLiked(item) ? R_HEART : B_HEART} alt="heart" />
              </button>
            </div>

            <div className="B_TEXT_HOME">
              <div className="B_TEXT_top">
                <h3>{item.title}</h3>
                <p
                  className="B_p1"
                  onClick={() => navigate(`/companies/${item.id}`)}
                >
                  {item.developer}
                </p>
                <p className="B_p2">{item.city}</p>
                <p className="B_p3">{item.address}</p>
                <hr />
                <h4>{item.price_per_m2}</h4>
              </div>

              <div className="B_TEXT_bottom">
                {item.flats?.map((flat, i) => (
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

      {totalPages > 1 && (
        <div className="pagination-wrapper">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}

export default Banner2;
