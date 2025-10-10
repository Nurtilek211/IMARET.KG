import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBuildings } from "../redux/BildingSlice/bildingSlice";

function ByYear() {
  const { year } = useParams();
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.buildings);

  const now = new Date().getFullYear();

  useEffect(() => {
    dispatch(getBuildings());
  }, [dispatch]);

  const filteredBuildings = list.filter((b) =>
    year === "done" ? b.old < now : b.old === Number(year)
  );

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="Banner_HOME">
      <h2 className="TEAXTIK">
        {year === "done"
          ? "Сданные новостройки"
          : `Новостройки ${year} года`}
      </h2>

      <div className="Banner_HOPPy">
        {filteredBuildings.length > 0 ? (
          filteredBuildings.map((b) => (
            <div key={b.id} className="B_HOMEE">
              <div className="B_IMG_HOME">
                <img className="IMG_B1" src={b.image} alt={b.title} />
                <img className="IMG_B2" alt="like" />
              </div>

              <div className="B_TEXT_HOME">
                <div className="B_TEXT_top">
                  <h3>{b.title}</h3>
                  <div>
                    <span className="B_p1">{b.developer}</span>
                  </div>
                  <p className="B_p2">{b.city}</p>
                  <p className="B_p3">Срок сдачи: {b.old}</p>
                </div>

                <div className="B_TEXT_bottom">
                  <div>Цена: {b.price_per_m2}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Нет новостроек для выбранного года.</p>
        )}
      </div>
    </div>
  );
}

export default ByYear;
