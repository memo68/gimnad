import { useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


export const Routes = () => {
    //const [checking, SetChecking] = useState(true);
    //const [isLoggedIn, SetIsLoggedIn] = useState(false);

    useEffect(() => {
        // consultar a firebase si esta autenticado o no
    });

    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Redirect to="/login" />
                
            </Switch>
        </Router>
    )

};

