import React from "react";
import { useNavigate } from "react-router-dom";
import "./wishCard.scss";

function WishCard({ item }) {
  const navigate = useNavigate();

  if (!item) return null;

  const goToCompany = () => {
    navigate(`/companies/${item.id}`);
  };

  return (
    <div className="wish-card" onClick={goToCompany}>
      <div className="wish-card-image-wrapper">
        <img
          src={item.image ?? "https://via.placeholder.com/300"}
          alt={item.title ?? "Жилой комплекс"}
          className="wish-card-image"
        />
      </div>

      <div className="wish-card-info">
        <h3 onClick={goToCompany}>{item.title ?? "Название комплекса"}</h3>
        <p>Стройкомпания: {item.developer ?? "не указан"}</p>
        <p>Город: {item.city ?? "не указан"}</p>
        <p>Адрес: {item.address ?? "не указан"}</p>
        <p>Цена за м²: {item.price_per_m2 ?? "не указана"}</p>
      </div>

      {item.flats?.length > 0 ? (
        <div className="wish-card-flats">
          {item.flats.map((flat, index) => (
            <div key={index} className="flat-item">
              <p>{flat.rooms}-комн.</p>
              <p>Площадь: {flat.area}</p>
              <p>Цена: ${flat.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-flats">Информация о квартирах отсутствует</p>
      )}
    </div>
  );
}

export default WishCard;
