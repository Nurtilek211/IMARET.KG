import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (!email || !password) {
            setMessage("Пожалуйста, заполните все поля!");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email.trim(), password);

            setMessage("Вход выполнен успешно! ✅");
            setFormData({ email: "", password: "" });

            setTimeout(() => navigate("/"), 1500);
        } catch (error) {
            switch (error.code) {
                case "auth/user-not-found":
                    setMessage("Пользователь с таким email не найден!");
                    break;
                case "auth/wrong-password":
                    setMessage("Неверный пароль!");
                    break;
                case "auth/invalid-email":
                    setMessage("Некорректный email!");
                    break;
                case "auth/too-many-requests":
                    setMessage("Слишком много попыток входа. Попробуйте позже.");
                    break;
                case "auth/invalid-credential":
                    setMessage("Некорректный пароль или Gmail!");
                    break;
                default:
                    setMessage(error.message);
            }
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Войти в аккаунт</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button type="submit">Войти</button>
                </form>

                {message && (
                    <p className={`message ${message.includes("успешно") ? "success" : "error"}`}>
                        {message}
                    </p>
                )}

                <button className="switch-button" onClick={() => navigate("/register")}>
                    Еще нет аккаунта? Зарегистрироваться
                </button>
            </div>

            <div className="background-shapes">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Login;
