import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBuildings } from "../redux/BildingSlice/bildingSlice";

function ByYear() {
  const params = useParams();
  const year = params.year;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.buildings);
  const list = state.list;
  const loading = state.loading;
  const error = state.error;

  const now = new Date().getFullYear();

  useEffect(() => {
    dispatch(getBuildings());
  }, [dispatch]);

  let filteredBuildings = [];
  for (let i = 0; i < list.length; i++) {
    if (year === "done") {
      if (list[i].old < now) {
        filteredBuildings.push(list[i]);
      }
    } else {
      if (list[i].old === Number(year)) {
        filteredBuildings.push(list[i]);
      }
    }
  }

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <div className="Banner_HOME">
      <h2 className="TEAXTIK">
        {year === "done" ? "Сданные новостройки" : "Новостройки " + year + " года"}
      </h2>

      <div className="Banner_HOPPy">
        {filteredBuildings.length > 0 ? (
          filteredBuildings.map(function (b) {
            return (
              <div key={b.id} className="B_HOMEE">
                <div className="B_IMG_HOME">
                  <img className="IMG_B1" src={b.image} alt={b.title} />
                  <img className="IMG_B2" alt="like" />
                  <img src={b.imageC} alt="" className="IMG_B2_C" />
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
            );
          })
        ) : (
          <p>Нет новостроек для выбранного года.</p>
        )}
      </div>
    </div>
  );
}

export default ByYear;
