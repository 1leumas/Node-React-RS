import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) { //entrar no aplicativo, validar token
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@leumasnotes:user", JSON.stringify(user));
            localStorage.setItem("@leumasnotes:token", token);

            instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token });
        } catch (error) {
            if (error.response) {
                alert(error.response.data);
            } else {
                alert("couldnt sign in");
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@leumasnotes:user");
        localStorage.removeItem("@leumasnotes:token");

        setData({});
    }

    useEffect(() => { //ficar salvo no localstorage
        const user = localStorage.getItem("@leumasnotes:user");
        const token = localStorage.getItem("@leumasnotes:token");

        if (token && user) {
            instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }

    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };