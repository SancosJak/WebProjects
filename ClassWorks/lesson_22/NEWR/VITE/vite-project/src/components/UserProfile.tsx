import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function UserProfile() {
    const [user, setUser] = useState<{email:string; image:string} | undefined>(undefined);
    // создается состояние user типа, предоставляющее  информацию о пользователе: {email:string; image:string} | undefined
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: 
            {
                Authorization: `Bearer ${localStorage.getItem("access")}`,
            },
        })
            .then(res => res.json())
            .then(data => {
            setUser(data)
        })
}, [])
console.log("Received JWT:", localStorage.getItem("access"))
// useEffect используется для получения информации о пользователе из API
// внутри useEffect функция fetch отправляет GET-запрос на URL https://dummyjson.com/auth/me
// полученный JWT сохраняется в localStorage локальном хранилище
const handleLogout = () => {
    // очищаем локал сторедж
    localStorage.removeItem("access");
    navigate("/login");
}
// функция handleLogout используется для выхода из аккаунта
// функция navigate используется для перехода на страницу логина (/login)
    return (
        <div>
            <h1>User Profile</h1>
            User info: {user?.email ? user?.email : "Not authorized"}
            <img src={user?.image} alt="" style={{ width: "200px" }} />
            <p>(Подсказка: в useEffect запрос на endpoint /auth/me)</p>
            <button style={{ width:150, color: "red", backgroundColor: "greenyellow"}} onClick={handleLogout}>Logout</button>
        </div>
    )
}