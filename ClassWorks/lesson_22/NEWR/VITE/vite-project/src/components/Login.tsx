import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // useState используется для хранения состояния компонента полей ввода
    // для имени пользователя(username) и пароля(password)
    
    function handleForm(event: FormEvent<HTMLFormElement>) {
        const credentials = { username, password };    
        event.preventDefault();
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        })
        .then(res => res.json())
        .then(data => localStorage.setItem("access", data.token));
    }
    const navig = useNavigate();
    const handleLogin = () => {
        navig("/");
    }
// функция handleForm принимает событие FormEvent<HTMLFormElement>
// и использует его для обработки формы ввода логина и пароля

// event.preventDefault() предотвращает отправку формы по умолчанию

// fetch отправляет POST-запрос на URL https://dummyjson.com/auth/login
// с данными пользователя (credentials)

// res.json() возвращает промис, который будет выполнен, когда данные будут получены
// полученый токен сохраняется в localStorage локальном хранилище
    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleForm}>
                <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    placeholder="Username"
                />
                <input 
                    type="text" 
                    name="password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    placeholder="Password"
                />
                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
            <p>(Подсказка: username: "kminchelle", password: "0lelplR")</p>
        </div>
    );
}

// import { FormEvent, useState } from "react";
// import { useHistory } from "react-router-dom";

// export default function Login() {
//     const [username, setUsername] = useState<string>('');
//     const [password, setPassword] = useState<string>('');
//     const history = useHistory();

//     const handleForm = (event: FormEvent<HTMLFormElement>) => {
//         event.preventDefault();

//         const credentials = { username, password };

//         fetch('https://dummyjson.com/auth/login', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(credentials),
//         })
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(`HTTP error! Status: ${res.status}`);
//             }
//             return res.json();
//         })
//         .then(data => {
//             localStorage.setItem("access", data.token);
//             history.push("/"); // Редирект после успешного логина
//         })
//         .catch(error => {
//             console.error('Login error:', error);
//             // Обработка ошибок при запросе
//         });
//     }

//     return (
//         <div>
//             <h1>Login Page</h1>
//             <form onSubmit={handleForm}>
//                 <input 
//                     type="text" 
//                     name="username" 
//                     value={username} 
//                     onChange={e => setUsername(e.target.value)} 
//                     placeholder="Username"
//                 />
//                 <input 
//                     type="password"  {/* Используйте type="password" для поля пароля */}
//                     name="password" 
//                     value={password} 
//                     onChange={e => setPassword(e.target.value)} 
//                     placeholder="Password"
//                 />
//                 <button type="submit">Login</button>
//             </form>
//             <p>(Подсказка: username: "kminchelle", password: "0lelplR")</p>
//         </div>
//     );
// }
