import { useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "../pages/Login";

export const Rutas = () => {
    //const [checking, SetChecking] = useState(true);
    //const [isLoggedIn, SetIsLoggedIn] = useState(false);

    useEffect(() => {
        // consultar a firebase si esta autenticado o no
    });

    return (
        <Router>
            <Routes>
                <Route path="/login" component={Login} />
            </Routes>
        </Router>
    )

};

