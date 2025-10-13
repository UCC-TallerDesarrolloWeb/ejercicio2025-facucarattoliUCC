import {useState} from "react";
import "./login.css"

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const handlerLogin = async (e) => {
        e.preventDefault();

        if(usuario ==="admin" && password == "admin"){
            console.log("Login successfull");
        }else{
            console.log("Login wrong");
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handlerLogin}>
                <h2>Iniciar Sesion</h2>

                <label htmlFor="usuario">Usuario: </label>
                <input type="text"
                       id = "usuario"
                       placeholder="usuario"
                       value={usuario}
                       onChange={(e) => setUsuario(e.target.value)}
                       required/>

                <label htmlFor="password">Password: </label>
                <input type="password"
                       id = "password"
                       placeholder="contraseña"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required/>

                <button type="submit">Ingresar</button>
            </form>
        </div>

    )
}


export default Login;