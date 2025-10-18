import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWish, clearWish } from "../../redux/Wish/wishSlice";
import "./wishlist.scss"
import WishCard from "../../components/WishCard/wishCard";
import { Link } from 'react-router-dom';

function WishList() {
    const dispatch = useDispatch();
    const wishItems = useSelector((state) => state.wish.items);

    if (wishItems.length === 0) {
        return (
            <div className="wish-list-empty">
                <p>Список избранного пуст 😢</p>
                <Link to="/"><p className="Block">Выбрать</p></Link>
            </div>
        );
    }

    return (
        <div className="wish-list">
            <h2>Мои избранные объекты {wishItems.length}</h2>
            <div className="wish-list-actions">
                <button onClick={() => dispatch(clearWish())}>Очистить всё</button>
            </div>

            {wishItems.map((item) => (
                <div key={item.id} className="wish-list-item">
                    <WishCard item={item} />
                    <button onClick={() => dispatch(removeFromWish(item))}>Удалить</button>
                </div>
            ))}
        </div>
    );
}

export default WishList;
