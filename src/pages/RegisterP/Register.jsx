import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Register.scss";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", phone: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, phone } = formData;

    if (!name || !email || !password || !phone) {
      setMessage("Пожалуйста, заполните все поля!");
      return;
    }

    const trimmedEmail = email.trim();
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(trimmedEmail)) {
      setMessage("Пожалуйста, используйте корректный Gmail!");
      return;
    }

    if (password.length < 6) {
      setMessage("Пароль должен быть минимум 6 символов!");
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setMessage("Пожалуйста, введите корректный номер телефона!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, trimmedEmail, password);
      await updateProfile(userCredential.user, { displayName: name });

      await setDoc(doc(db, "users", userCredential.user.uid), {
        name: String(name || ""),
        email: String(trimmedEmail || ""),
        phone: String(phone || ""),
      });

      setMessage("Регистрация успешна! ✅");
      setFormData({ name: "", email: "", password: "", phone: "" });

      setTimeout(() => setMessage(""), 1000);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setMessage("Этот email уже зарегистрирован. Попробуйте войти или используйте другой email.");
      } else if (error.code === "auth/weak-password") {
        setMessage("Пароль должен быть минимум 6 символов!");
      } else if (error.code === "auth/invalid-email") {
        setMessage("Некорректный email!");
      } else {
        setMessage(error.message);
      }
    }
  };

  return (
    <div className="register-new-container">
      <div className="register-card">
        <h2>Создать аккаунт</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
          />
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

          <PhoneInput
            country={"kg"}
            value={formData.phone}
            onChange={(phone) => setFormData({ ...formData, phone })}
            placeholder="Номер телефона"
          />

          <button type="submit">Зарегистрироваться</button>
        </form>

        {message && (
          <p className={`message ${message.includes("успешна") ? "success" : "error"}`}>
            {message}
          </p>
        )}

        <button className="switch-button" onClick={() => navigate("/login")}>
          Уже есть аккаунт? Войти
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

export default Register;
